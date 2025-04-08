document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalMainImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const thumbnailsContainer = document.querySelector('.thumbnails');
    let currentImageIndex = 0;
    let currentProject = null;

    // Calculate number of visible thumbnails based on screen width
    function getVisibleThumbnails() {
        const width = window.innerWidth;
        if (width <= 480) return 5;
        if (width <= 768) return 5;
        if (width <= 992) return 5;
        return 5;
    }

    // Add click event to all project buttons
    document.querySelectorAll('.project-card').forEach(card => {
        const button = card.querySelector('.project-link');
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const projectId = card.dataset.project;
                const project = projectData[projectId];

                if (project) {
                    openModal(project);
                } else {
                    console.error(`Project data not found for ID: ${projectId}`);
                }
            });
        }
    });

    function openModal(project) {
        // Set the current project
        currentProject = project;
        
        // Set initial content
        modalTitle.textContent = project.title[0];
        modalImage.src = project.images[0];
        modalContent.innerHTML = project.descriptions[0];
        currentImageIndex = 0;
        
        // Update image counter
        document.getElementById('currentImageNum').textContent = 1;
        document.getElementById('totalImageNum').textContent = project.images.length;

        // Clear and create thumbnails
        thumbnailsContainer.innerHTML = '';
        project.images.forEach((img, index) => {
            const thumb = document.createElement('div');
            thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${img}" alt="${project.title[index]} ${index + 1}">`;

            thumb.addEventListener('click', () => {
                updateModalContent(project, index);
            });

            thumbnailsContainer.appendChild(thumb);
        });

        // Initialize thumbnail scrolling
        updateThumbnailScroll();

        // Show modal
        modal.style.display = 'block';
        
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }

    function updateModalContent(project, index) {
        modalTitle.textContent = project.title[index];
        modalImage.src = project.images[index];
        modalContent.innerHTML = project.descriptions[index];
        currentImageIndex = index;
        
        // Update image counter
        document.getElementById('currentImageNum').textContent = index + 1;

        // Update active thumbnail
        document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });

        // Update thumbnail scroll position
        updateThumbnailScroll();
    }

    function updateThumbnailScroll() {
        const thumbnails = thumbnailsContainer.querySelectorAll('.thumbnail');
        const visibleCount = getVisibleThumbnails();
        
        if (thumbnails.length <= visibleCount) return;
        
        // Calculate which thumbnails should be visible
        let startIndex = Math.max(0, currentImageIndex - Math.floor(visibleCount / 2));
        
        // Ensure we don't scroll past the end
        if (startIndex + visibleCount > thumbnails.length) {
            startIndex = Math.max(0, thumbnails.length - visibleCount);
        }
        
        // Get width of a thumbnail (including gap)
        const thumbElement = thumbnails[0];
        const thumbStyle = window.getComputedStyle(thumbElement);
        const thumbWidth = thumbElement.offsetWidth + parseInt(thumbStyle.marginRight || 10);
        
        // Set the scroll position
        thumbnailsContainer.scrollLeft = startIndex * thumbWidth;
    }

    // Next/Previous buttons
    document.querySelector('.slider-btn.next').addEventListener('click', () => {
        if (currentProject) {
            const nextIndex = (currentImageIndex + 1) % currentProject.images.length;
            updateModalContent(currentProject, nextIndex);
        }
    });

    document.querySelector('.slider-btn.prev').addEventListener('click', () => {
        if (currentProject) {
            const prevIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
            updateModalContent(currentProject, prevIndex);
        }
    });

    // Close modal
    document.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore body scrolling
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore body scrolling
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (modal.style.display === 'block') {
            updateThumbnailScroll();
        }
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display !== 'block') return;
        
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        } else if (e.key === 'ArrowRight' && currentProject) {
            const nextIndex = (currentImageIndex + 1) % currentProject.images.length;
            updateModalContent(currentProject, nextIndex);
        } else if (e.key === 'ArrowLeft' && currentProject) {
            const prevIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
            updateModalContent(currentProject, prevIndex);
        }
    });
});