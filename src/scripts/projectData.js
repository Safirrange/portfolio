const projectData = {
    'brotech': {
        title: [
            'Repair Guide & Service Platform – In Progress (3rd Year, 2nd Semester Project)',
            'Home Page',
            'Home Page',
            'Home Page',

            'Login Modal',
            'Sign-up Page',

            'Repair Guides',
            'Repair Guides',
            'Create Guides Page',
            'Create Guides Page',
            'Guides Page',
            'Guides Page',

            'Community Page',
            'Forums Page',
            'Forums Page',
            'Stories Page',
            'Create Stories Page',
            'Create Stories Page',

            'News Page',
            'News Category Page',
            'News Content',
            'News Creation Page',
            'User News Copy - Status: Pending (Private)',
            'User News Copy - Status: Rejected (Private)',
            'Rejected / Deleted News',

            'Experts Page',

            'Latest Gadget Category Page',
            'Latest Gadget Category Page',
            'Gadgets Page',
            'Gadgets Rating',

            'User Dashboard',
            'User Notifications',

            'Admin Login',
            'Admin Dashboard',
            'Users Management',
            'Professionals Management',
            'Website Content Management Index',
            'Repair Guides Page',
            'Repair Guides Page',
            'Repair Guides Page',
            'Repair Guides Page',
            'Repair Guides Page',
            'Repair Guides Page',
            'Repair Guides Page',
            'News Categories Page',
            'News Page',
            'News Adding Categories Page',
            
            'News Reviewal Page',
            'News Reviewal Page',
            'Gadget Management',
            'Gadget Management',
            'Gadget Management',
            'Gadget Management',
            'Admins Page',
            'Add Admins',
            'Requests',
            'News Publication Requests',
            'Professional Application Requests',
            'Website Activities',
            'User Activities',
            'Admin Activities',
            'Settings'

        ],
        images: [
            'assets/brotech/brotech.png',
            'assets/brotech/homepage_1.png',
            'assets/brotech/homepage_3.png',
            'assets/brotech/homepage_2.png',

            'assets/brotech/login.png',
            'assets/brotech/signup.png',

            'assets/brotech/repair.png',
            'assets/brotech/repair_1.png',
            'assets/brotech/repair_2.png',
            'assets/brotech/repair_3.png',
            'assets/brotech/guide.png',
            'assets/brotech/guide_1.png',

            'assets/brotech/community.png',
            'assets/brotech/qa.png',
            'assets/brotech/qa_1.png',
            'assets/brotech/share-story_2.png',
            'assets/brotech/share-story.png',
            'assets/brotech/share-story_1.png',

            'assets/brotech/news_1.png',
            'assets/brotech/news.png',
            'assets/brotech/news-content.png',
            'assets/brotech/news_create.png',
            'assets/brotech/news_create_1.png',
            'assets/brotech/news_create_2.png',
            'assets/brotech/rejected_news.png',

            'assets/brotech/experts.png',

            'assets/brotech/gadgets.png',
            'assets/brotech/gadgets_1.png',
            'assets/brotech/gadgets_2.png',
            'assets/brotech/gadgets_3.png',

            'assets/brotech/user_dashboard.png',
            'assets/brotech/user_notif.png',

            'assets/brotech/admin-login.png',
            'assets/brotech/admin_dashboard.png',
            'assets/brotech/admin_users.png',
            'assets/brotech/admin_prof.png',
            'assets/brotech/admin-manage-index.png',
            'assets/brotech/admin-manage.png',
            'assets/brotech/admin-manage_1.png',
            'assets/brotech/admin-manage_2.png',
            'assets/brotech/admin-manage_3.png',
            'assets/brotech/admin-manage_4.png',
            'assets/brotech/admin-manage_5.png',
            'assets/brotech/admin-manage_6.png',
            'assets/brotech/admin-news-manage.png',
            'assets/brotech/admin-news-manage_1.png',
            'assets/brotech/admin-news-add.png',
            'assets/brotech/admin-news-approve.png',
            'assets/brotech/admin-news-approve_1.png',
            'assets/brotech/admin-gadget.png',
            'assets/brotech/admin-gadget_1.png',
            'assets/brotech/admin-gadget_2.png',
            'assets/brotech/admin-gadget_3.png',
            'assets/brotech/admins.png',
            'assets/brotech/admins_1.png',
            'assets/brotech/admin_request.png',
            'assets/brotech/admin_request_news.png',
            'assets/brotech/admin_request_professional.png',
            'assets/brotech/admin-activity.png',
            'assets/brotech/admin-activity_1.png',
            'assets/brotech/admin-activity_2.png',
            'assets/brotech/admin_settings.png'
        ],
        descriptions: [

            `This project is currently a work in progress, developed as part of my 3rd year, 2nd semester. Although incomplete, it’s already a reflection of how far I’ve come by applying lessons from past projects, guidance from seniors, and (finally) some real instruction from our professors.
             
            <br><br>We were tasked to look for a website with a functioning backend system, replicate its functionalities, and apply improvements or add something new. 
            I group chose the iFixit website — a community-based platform where users share repair guides to help others fix their gadgets. 
            Inspired by this concept, we decided to add a new feature: a professional finder. This allows users not only to find guides but also to connect with professionals who can do the repairs for them.

            <br><br>We intentionally removed the section that deals with buying tools from the original site, as I personally don't want to build a system that handles transactions just yet. 
            The focus of our version is more on community, repair support, and expert connection, rather than e-commerce.
            
            <br><br>
                Compared to my previous works, I’ve made several key improvements:
                <br> - Separate user and admin accounts for better security and role management.
                <br> - Cleaner UI design and a more intuitive user experience.
                <br> - Improved data handling — instead of dumping everything at once, I’m now using pagination to manage large datasets.
                <br> - Thoughtful feature additions aimed at making the platform easier and more useful for users.
                
                <br><br>However, this project also taught me a major lesson: the importance of planning. Like many of my past works, I jumped into coding without a clear roadmap, thinking I’d “figure it out later.” That mindset led to scheduling issues, rushed decisions, and most notably — a messy database structure with too many tables and unnecessary relationships. It became clear how much time and efficiency can be lost without solid preparation.
                <br><br>If there’s one takeaway from this project, it’s this: Always plan ahead — not just what features to build, but how everything will connect and evolve.`,

            `The Home page features a navigation bar that allows users to easily access all major sections of the website. 
            <br><br> A footer is included with links to customer support and information about the BroTech team. 
            <br><br> The main content of the homepage highlights featured tools, current news, and the latest updates in today's tech landscape.`,

            `Home page pt. 2`,

            `Home page pt. 3`,

            `Log-in modal for user authentication
            <br><br> Connects to the database to verify user credentials.
            <br><br> It includes a form for users to enter their email and password, and a button to submit the form.
            It also includes a "forgot password" link for users who need to reset their password.
            <br><br> Complete with error handling for incorrect credentials.
            <br><br> Upon successful login, users are redirected to their dashboard.`,

            `Sign-up page for new users to create an account
            <br><br> Connects to the database to store user information.
            <br><br> It includes a form for users to enter their name, email, and password, and a button to submit the form.
            It also includes a "terms and conditions" checkbox for users to agree to before signing up.
            And lastly a mailing system to send a verification email to the user.
            <br><br> Complete with error handling for duplicate users and missing inputs.
            <br><br> Upon successful registration, users are redirected to the sign-in page.`,

            `Users can create their own repair guides by selecting the device they want to write about. 
            <br><br> Guides can be marked as private or public depending on the user’s intent. 
            <br><br> After submission, guides are subject to admin approval before being published for public access.`,

            `Repair Guides pt.2
            <br><br> Guides are categorized for easier navigation, with filters by device type and difficulty level. 
            <br><br> Users can also save guides for later or comment for feedback and tips.`,

            `Users can create their own repair guides by selecting the device they want to write about.
            <br><br> Guides can be marked as private or public depending on the user’s intent. 
            <br><br> After submission, guides are subject to admin approval before being published for public access.`,

            `Create Guide pt. 2
            <br><br> The guide creation editor includes sections for step-by-step instructions, images, and tool requirements. 
            <br><br> Users can edit, preview, and save drafts before final submission. Admins will notify users once their guide is approved or rejected.`,

            `Users can browse various repair guides sorted into categories based on their specific needs. 
            <br><br> Guides are divided into four main types: Replacement, Technique, Tools, and Troubleshooting, allowing users to easily find the help they’re looking for. 
            <br><br> Each guide includes a short description, detailed steps, and access to a related forum section where users can ask questions or share answers. 
            <br><br> This feature encourages collaborative problem-solving and community engagement.`,

            `Guides page pt. 2`,

            `Community page Index
            <br><br> This is the main hub for all community-related activities on the platform. 
            <br><br> Users can explore different contributions such as forums, guide creations, news publications, and story writing. 
            <br><br> It also showcases the latest updates and activity from fellow community members, making it easier to stay engaged and discover new content.`,

            `Forums Page
            <br><br> Users can browse a variety of questions posted by others, especially those related to tech problems and repair issues. 
            <br><br> Questions can be filtered by categories such as: Unanswered, Most Helpful, and Newest for easier navigation. 
            <br><br> Users are also encouraged to contribute by posting helpful answers to existing questions.`,

            `Forums Page pt. 2
            <br><br> If users don’t find the specific question they’re looking for, they can post their own by submitting a new question to the community.`,

            `Stories Page
            <br><br> Users can explore a variety of stories shared by others in the community, often detailing their personal experiences with tech issues and solutions. 
            <br><br> Stories are categorized and can be sorted by the most viewed and the most recent ones for easier discovery.`,

            `Users have the opportunity to share their own experiences by writing and publishing stories to the platform. 
            <br><br> These stories can offer insights, lessons learned, or even just relatable moments for others facing similar challenges.
            <br><br> After submission, stories are subject to admin approval before being published for public access.
            <br><br> Admins will notify users once their stories is approved or rejected.`,

            `Create Stories Page pt.2`,

            `News Browsing
            <br><br> Users can browse the latest news articles available on the platform. 
            <br><br> News are categorized into different topics, allowing users to search for specific articles or explore through the news category page.`,

            `News Category Page
            <br><br> Displays all available news categories. 
            <br><br> Users can click on a category to view all related articles under that section.`,

            `News Content Page
            <br><br> Shows the full content of each news article. 
            <br><br> Includes the author’s name and the date the news was published.`,

            `News Creation Page
            <br><br> Allows users to submit their own news articles. 
            <br><br> After submission, news are subject to admin approval before being published for public access.
            <br><br> Admins will notify users once their news is approved or rejected.`,

            `Pending News View
            <br><br> Users have a private copy of their submitted news. 
            <br><br> While waiting for approval, the news will be displayed as pending.`,

            `Rejected News View
            <br><br> If a news article is rejected, users will be notified and the page will indicate the rejection. 
            <br><br> Approved news will automatically appear on the main news page.`,

            `Deleted or Unavailable News
            <br><br> If a news article has been deleted or rejected and a user attempts to access it manually, a message will be shown indicating that the news is unavailable.`,

            `Users can search for professionals in the tech field, regarding their problems`,

            `Users can explore the latest tech devices categorized for easy browsing. 
            <br><br> Each category (e.g., Phones, Tablets, Laptops) displays all gadgets under it. 
            <br><br> For example, under Phones: iPhone 15, iPhone 16, etc.`,

            `Gadget Category Page pt. 2`,

            `Users can view detailed information about the latest gadgets, including pros and cons, pricing, and release dates. 
            <br><br> Gadget ratings from both the community and professionals are also displayed.`,

            `Users are allowed to rate gadgets they’ve used or experienced.
            <br><br> Ratings are divided into four categories: Longevity, Repairability, Functionality, and Price. 
            <br><br> Each category is rated from 1–10. <br><br> Once submitted, ratings are final and cannot be edited.`,

            `Every user has access to a personal dashboard that records all of their activities on the platform. 
            <br><br> Each activity includes a clickable link to view details or revisit the specific action they made.`,

            `Users will be able to received notifications regarding their account, submission or other concerns.
            <br><br> Notifications include updates like form or application approvals, rejections, or other important messages.`,

            `A simple login page for admin.
            <br><br>Connects to the database to verify admin credentials.
            <br><br> Complete with error handling for incorrect credentials.
            <br><br> Upon successful login, admins are redirected to their dashboard.`,

            `Overview panel showcasing real-time website statistics.
            <br><br> Displays total number of registered users, published content, pending reviews, and more.
            <br><br> Acts as the central hub for all administrative activities.`,

            `Allows admins to view and manage user profiles.
            <br><br> Search functionality for quick user lookup.
            <br><br> Filter users by activity status (active/inactive).
            <br><br> Includes options to ban or unban user accounts.`,

            `Dedicated section for managing professional applicants and users.
            <br><br> Admins can view credentials, verify details, and approve or reject applications.
            <br><br> Supports banning, unbanning, and filtering professionals by approval or activity status.`,

            `Centralized management panel for all website content types (guides, gadgets, categories, news, etc.)
            <br><br> Quick links to access specific sections for editing and reviewing content.`,

            `Admins can view, add, edit, or delete guide categories (e.g., Phones, Tablets).
            <br><br> Built-in search bar for filtering category lists.
            <br><br> Input validation to prevent missing or incorrect data.`,

            `This is the page for adding categories, this includes a complete error handling for any missing or wrong inputs.`,

            `View, add, edit, or delete brands associated with guide categories (e.g., Apple, Samsung).
            <br><br> Filtering and search options provided for ease of management.
            <br><br> All form inputs include validation and error handling.`,

            `This is the page for adding brands, this includes a complete error handling for any missing or wrong inputs.`,

            `Manage specific models under each brand (e.g., iPhone 14, Galaxy S22).
            <br><br> Admins can add or edit types and view associated specifications.
            <br><br> Features include search, filtering, and validation checks.`,

            `Modal for brands to view its specifications.`,

            `This is the page for adding types, this includes a complete error handling for any missing or wrong inputs.`,

            `Allows creation and management of news categories (e.g., Mobile, Hardware).
            <br><br> Enables filtering for easier navigation and editing.`,

            `Categorizes news articles into their respective category, and status: pending, approved, and rejected.
            Full article preview with accept/reject options and comment section for feedback.`,

            `This is the page for adding news categories, this includes a complete error handling for any missing or wrong inputs.`,

            `Admins can review user-submitted news articles.
            <br><br> View full news content and metadata (author, timestamp, category).
            <br><br> Options to approve or reject submissions, with a rejection reason required.`,

            `News reviewal page pt. 2`,

            `Admin interface to manage categories for gadgets (e.g., Phones, Smartwatches).
            <br><br> Add, edit, or delete categories with input validation.
            <br><br> Includes a search feature to streamline management.`,

            `This is the page for adding gadget categories, this includes a complete error handling for any missing or wrong inputs.`,

            `Add, edit, or delete gadgets within selected categories (e.g., iPhone 15, AirPods Pro).
            <br><br> Displays gadget ratings submitted by admins.
            <br><br> Admins may rate gadgets while adding or later via the rating system.`,

            `This is the page for adding gadgets.
            <br><br> Rating categories: Longevity, Repairability, Functionality, Price.
            <br><br> Score range from 1 to 10.
            <br><br> Once submitted, ratings cannot be modified to ensure consistency.`,

            `Admins can view the list of all administrative users.
            <br><br>Option to add new admins, or delete/ban existing ones.`,

            `Admin adding page
            <br><br> Complete with error handling for missing or wrong inputs, and account duplication.`,

            `Admin notification center for reviewing pending user submissions and requests.
            <br><br> Displays user requests like guide approvals, professional applications, and news submissions.`,

            `If a user publish a new news, admins can review this page to see if the news is pending, approved, or rejected.
            <br><br>It includes categorization of news articles if it's pending, approved, and rejected.`,

            `If a user applies to be a professional, admins can review his credentials and change the status of the user to a professional.
            <br><br> I will also show if the user's current application is pending, approved, or rejected.`,

            `Web Activities Index Page
            <br><br> All website activities, both user and admin will be displayed here`,

            `Admins can view user activities on the website,
            <br><br> Chronological log of user and admin activities on the website.
            <br><br> Includes timestamps and actions performed.
            <br><br> Search and filter options provided for quick audits.`,

            `Admins can view any admins activity, track which admin took actions such as approving content or banning users.
            <br><br> Includes filtering for easier traceability.`,

            `Toggle website into maintenance mode for updates or fixes.
            <br><br> Prevents regular users from accessing the site while allowing admin access.`

        ]
    },
    'profil-travels': {
        title: [
            'First Major Project – Travel Reservation System',
            'Home Page',
            'Home Page',
            'Home Page',
            'Home Page',
            'Feedback Page',
            'Chatbot',
            'Sign-in page',
            'Sign-up page',
            'Password Reset',
            'Travel Article Page',
            'Travel Article Page',
            'Booking Hotel Page',
            'Booking Hotel Page',
            'Booking Flight Page',
            'Booking Flight Page',
            'Booking Flight Page',
            'Promo Page',
            'Promo Page',
            'Users Promo with PWD/Senior Citizen Page',
            'Guidelines Page',
            'FAQ Page',
            'Contact Page',
            'Contact Page',
            'Contact Page',
            'Contact Page',
            'About Page',
            'About Page',
            'Terms and Conditions Page',

            'Users Manage Hotel Booking Page',
            'Users Manage Flight Booking Page',
            'Users Wallet Page',
            'Users Transaction History Page',
            'Users Wishlist Page',
            'Users Wishlist Page',
            'Users Promo Page',
            'Edit User Account Info Page',
            'Payment Page',
            'Payment Page',
            'Payment Page',
            'Payment Page',

            'Admin Article Page',
            'Admin Article Add Page',
            'Admin Hotel Page',
            'Admin Hotel Add Page',
            'Admin Flight Page',
            'Admin Flight Add Page',
            'Admin Promo Page',
            'Admin Promo Add Page',
            'Admin Transaction History Page',
            'Admin Users Page',
            'Admin FAQ Page',
            'Admin FAQ Add Page',
            'Admin Location Page',
            'Admin Location Add Page',
        ],

        images: [
            'assets/profil-travels/profil.png',
            'assets/profil-travels/homepage.png',
            'assets/profil-travels/homepage_1.png',
            'assets/profil-travels/homepage_2.png',
            'assets/profil-travels/homepage_3.png',
            'assets/profil-travels/feedback.png',
            'assets/profil-travels/chat-bot.png',
            'assets/profil-travels/sign-in.png',
            'assets/profil-travels/sign-up.png',
            'assets/profil-travels/password-reset.png',
            'assets/profil-travels/travel-articles.png',
            'assets/profil-travels/travel-articles_1.png',
            'assets/profil-travels/booking_hotel.png',
            'assets/profil-travels/booking_hotel_1.png',
            'assets/profil-travels/booking_flight.png',
            'assets/profil-travels/booking_flight_1.png',
            'assets/profil-travels/booking_flight_2.png',
            'assets/profil-travels/promo.png',
            'assets/profil-travels/promo_1.png',
            'assets/profil-travels/users_promo_pwd.png',
            'assets/profil-travels/guideline-page.png',
            'assets/profil-travels/faq.png',
            'assets/profil-travels/contact-page.png',
            'assets/profil-travels/contact-page_2.png',
            'assets/profil-travels/contact-page_3.png',
            'assets/profil-travels/contact-page_4.png',
            'assets/profil-travels/about.png',
            'assets/profil-travels/about_2.png',
            'assets/profil-travels/terms.png',

            'assets/profil-travels/bookings.png',
            'assets/profil-travels/bookings_1.png',
            'assets/profil-travels/users_wallet.png',
            'assets/profil-travels/users_history.png',
            'assets/profil-travels/wishlist.png',
            'assets/profil-travels/wishlist_1.png',
            'assets/profil-travels/users_promo.png',
            'assets/profil-travels/users-edit-account.png',
            'assets/profil-travels/payment.png',
            'assets/profil-travels/payment_1.png',
            'assets/profil-travels/payment_2.png',
            'assets/profil-travels/payment_3.png',

            'assets/profil-travels/admin_article.png',
            'assets/profil-travels/admin_article_add.png',
            'assets/profil-travels/admin_hotel.png',
            'assets/profil-travels/admin_hotel_add.png',
            'assets/profil-travels/admin_flight.png',
            'assets/profil-travels/admin_flight_add.png',
            'assets/profil-travels/admin_promo.png',
            'assets/profil-travels/admin_promo_add.png',
            'assets/profil-travels/admin_transaction.png',
            'assets/profil-travels/admin_users.png',
            'assets/profil-travels/admin_faq.png',
            'assets/profil-travels/admin_faq_add.png',
            'assets/profil-travels/admin_location.png',
            'assets/profil-travels/admin_location_add.png',
        ],
        descriptions: [
            ` This project was a huge learning experience for me in terms of creating a fully functioning website and understanding the logic behind databases.
            It marked the first time I used an AI chatbot, and the first time I built a project entirely on my own without following any tutorials — though I did use "Airpaz.com" as a reference.
            It was my introduction to events, relational structures, tokens, and database calculations. 
            I also encountered APIs for the first time, which taught me a valuable lesson: APIs are not cheap! I spent a lot of time creating different accounts just to get 50 more free refreshes.
            
            < br > <br>Additionally, I learned how a mailing system works — allowing users to send messages to admins, using email for account activation, and checking for duplicate accounts.
                I also gained a deeper understanding of web design and the importance of tools like Figma (or any wireframing tool) to map out designs before jumping into coding.
                Lastly, I learned a bit about chatbbots and how they can be integrated into a website.

                <br><br>The biggest lesson I learned, however, was not to overestimate myself.
                    Despite having two months to complete the project, I thought it would be easy — but I was wrong.
                    The payment system, in particular, caused me to get stuck for weeks.
                    I tried to understand it and implement it, but ultimately, I couldn’t finish that feature.
                    This project, while incomplete, became a major learning experience and a reminder to manage expectations and not rush through complex tasks.`,

            `Home page of the travel reservation system
                    <br><br> Includes a navigation bar, a footer, and a main content area.
                        <br><br> Highlights the key features of the travel reservation system, includes a list of popular destinations for flights and hotels.`,

            `Home page of the travel reservation system
                            <br><br> Includes a language selection option for users to choose their preferred language and a currency selection option for users to choose their preferred currency.`,

            `Second part of the home page
                                <br><br> Displays a list of the most recent promotions and offers.
                                    <br><br> It also includes the main reasons to use the travel reservation system.`,

            `Third part of the home page
                                        <br><br> It includes a list of the companies partners.
                                            <br><br> It also includes a feedback section where users can leave their comments and suggestions.
                                                <br><br> And finally the footer with links to the privacy policy, terms and conditions, and contact information.`,

            `Feedback page for users to leave their comments and suggestions`,

            `Chatbot interface for user inquiries and support
                                                    <br><br> It includes a chat window and a list of frequently asked questions.`,

            `Sign-in page for user authentication
            <br><br> Connects to the database to verify user credentials.
            <br><br> It includes a form for users to enter their email and password, and a button to submit the form.
            It also includes a "forgot password" link for users who need to reset their password.
            <br><br> Complete with error handling for incorrect credentials.
            <br><br> Upon successful login, users are redirected to their dashboard.`,

            `Sign-up page for new users to create an account
                                                                        <br><br> Connects to the database to store user information.
                                                                            <br><br> It includes a form for users to enter their name, email, and password, and a button to submit the form.
                                                                                It also includes a "terms and conditions" checkbox for users to agree to before signing up.
                                                                                And lastly a mailing system to send a verification email to the user.
                                                                                <br><br> Complete with error handling for duplicate users and missing inputs.
                                                                                    <br><br> Upon successful registration, users are redirected to the sign-in page.`,

            `Password reset page for users who forgot their password
                                                                                        <br><br> Users can enter their email to receive a password reset link. Upon clicking the link in their mail, they can set a new password.`,

            `Travel article page for users to read travel articles and tips
                                                                                            <br><br> Displays a list of articles with images and descriptions.
                                                                                                <br><br> Articles are categorized by country`,

            `Travel article page for users to read travel articles and tips pt. 2`,

            `Booking hotel page for users to search and book hotels
                                                                                                    <br><br> Displays a list of hotels with images and descriptions.
                                                                                                        <br><br> Allows filtering by location, and price.
                                                                                                            <br><br> Users can click on a hotel to view its full details book it, or add it to their wishlist.
                                                                                                                <br><br> Prevents duplicate bookings or adding the same hotel to the wishlist.`,

            `Booking hotel page for users to search and book hotels pt 2.
                                                                                                                    <br><br> Users can select their preferred room: Deluxe, Suite, or Regular)
                                                                                                                        <br><br> Prevents bookings on hotels that have no available rooms`,

            `Booking Flight Page for users to search and book flights
                                                                                                                            <br><br> Displays a list of flights with images and descriptions
                                                                                                                                <br><br> Allows filtering by departure/arrival locations and price
                                                                                                                                    <br><br> Prevents duplicate bookings or adding the same flight to the wishlist,
                                                                                                                                        <br><br> Automatically hides flights that have already departed.`,

            `Booking Flight Page for users to search and book flights pt 2.
                                                                                                                                            <br><br> Users can click on a flight to view its full details, book it, or add it to their wishlist`,

            `Booking Flight Page pt 3.
                                                                                                                                                <br><br> Users can select their preferred class: First Class, Business Class, or Economy
                                                                                                                                                    <br><br> Prevents bookings on flights that have no available seats`,

            `Promo page for users to view current promotions and offers
                                                                                                                                                        <br><br> Displays a list of promotions with images and descriptions.
                                                                                                                                                            <br><br> Users can click on a promotion to view more details and redeem it.
                                                                                                                                                                <br><br> It includes a list of promo codes and their expiration dates.
                                                                                                                                                                    <br><br> Prevents duplicate redemption of promo codes that are already expired or claimed.`,

            `Promo page for users who does not have an account yet`,

            `Promo page for users who applied for a senior citizen or a PWD discount
                                                                                                                                                                        <br><br> Users who applied for a senior citizen or a PWD discount and got accepted have a 20% discount by default.
                                                                                                                                                                            <br><br> Senior citizens and PWDs can not redeem any more promo codes to get additional discounts.`,

            `Guidelines page for users to read the guidelines and rules of the travel reservation system
                                                                                                                                                                                <br><br> It includes a list of guidelines with images and descriptions.`,

            `FAQ page for users to read frequently asked questions and their answers
                                                                                                                                                                                    <br><br> It includes a list of questions and answers.
                                                                                                                                                                                        <br><br> Users can click on a question to view its answer.
                                                                                                                                                                                            <br><br> It also includes a search bar to filter questions by keywords.
                                                                                                                                                                                                <br><br> Questions are categorized by topic for both hotels and flights, and users can filter questions by category.`,

            `Contact page for users to reach out for support or inquiries
                                                                                                                                                                                                    <br><br> It includes a contact form for users to enter their name, email, and message.
                                                                                                                                                                                                        <br><br> Users can also find the contact information of the travel reservation system team.
                                                                                                                                                                                                            <br><br> It also includes a list of social media links for users to follow the travel reservation system on different platforms.
                                                                                                                                                                                                                <br><br> It also includes a map showing the location of the travel reservation system office.`,

            `Contact page for users to reach out for support or inquiries pt. 2`,

            `Contact page for users to reach out for support or inquiries pt. 3
                                                                                                                                                                                                                    <br><br> Proof of the user who contacted the travel reservation system team.`,

            `Contact page for users who does not have an account yet`,

            `About page for users to read about the team behind "Profil Travels"
                                                                                                                                                                                                                        <br><br> It includes a brief history of the travel reservation system and its development.
                                                                                                                                                                                                                            <br><br> It also includes the mission and vision of the travel reservation system, as well as information about the team behind it.`,

            `About page for users to read about team behind "Profil Travels" pt. 2`,

            `Terms and conditions page for users to read the terms and conditions of "Profil Travels"`,

            `Hotel booking page where users can view, manage and track their hotel bookings
                                                                                                                                                                                                                                <br><br> Each booking includes a unique reference number for future transactions and inquiries.
                                                                                                                                                                                                                                    <br><br> Bookings can have one of three statuses: Pending, Confirmed, or Cancelled.
                                                                                                                                                                                                                                        <br><br> Users have the option to continue or cancel any booking at any time`,

            `Flight booking page where users can view, manage and track their flight bookings
                                                                                                                                                                                                                                            <br><br> Each booking includes a unique reference number for future transactions and inquiries.
                                                                                                                                                                                                                                                <br><br> Bookings can have one of three statuses: Pending, Confirmed, or Cancelled.
                                                                                                                                                                                                                                                    <br><br> Users have the option to continue or cancel any booking at any time`,

            `Wallet page for users to view their wallet balance
                                                                                                                                                                                                                                                        <br><br> The payment feature showcases the use of redeemable codes, which can be used to add funds to the wallet.
                                                                                                                                                                                                                                                            <br><br> Points can be earned through various activities, such as booking flights or hotels, and can be redeemed for discounts on future bookings.`,

            `Transaction history page for users to view their transaction history`,

            `Hotel wishlist page for users to view their wishlist
                                                                                                                                                                                                                                                                <br><br> Users have the option to book or remove any hotel booking that's in their wishlist at any time`,

            `Flight wishlist page for users to view their wishlist
                                                                                                                                                                                                                                                                    <br><br> Users have the option to book or remove any flight booking that's in their wishlist at any time`,

            `Promo page for users to view their redeemed promo codes
                                                                                                                                                                                                                                                                        <br><br> Displays the details of each promo code, including the discount amount and expiration date.
                                                                                                                                                                                                                                                                            <br><br> Allows removal of any promo code from user account at any time.
                                                                                                                                                                                                                                                                                <br><br> Automatically removes promo codes that are already expired or claimed.`,

            `A user profile management page that allows users to update their account details.
                                                                                                                                                                                                                                                                                    <br><br> Users can change their profile picture, name, email, and password.
                                                                                                                                                                                                                                                                                        <br><br> Includes a user-friendly form to input updated information.
                                                                                                                                                                                                                                                                                            <br><br> A submit button is provided to save changes and update the account information in the database.
                                                                                                                                                                                                                                                                                                <br><br> Complete with error handling for incorrect and missing inputs, allowing users to manage their account effectively.`,

            `Payment page for users to process payments for their bookings.
                                                                                                                                                                                                                                                                                                    <br><br> This page displays a list of all items the user has selected, with the ability to add or remove rooms and seats from the cart.
                                                                                                                                                                                                                                                                                                        <br><br> Users can view the total amount, select a preferred payment method, and proceed with the transaction.
                                                                                                                                                                                                                                                                                                            <br><br> Upon successful payment verification, the transaction is recorded and reflected in the user's transaction history for future reference.`,

            `Unfinished payment page pt. 2`,
            `Unfinished payment page pt. 3`,
            `Unfinished payment page pt. 4`,

            `Admin article page for managing travel articles and tips
                                                                                                                                                                                                                                                                                                                <br><br> Admins can add, edit, or delete articles and manage their categories.
                                                                                                                                                                                                                                                                                                                    <br><br> Complete with error handling for incorrect and missing inputs, allowing admins to manage articles effectively.`,

            `Admin article add page for adding new travel articles and tips`,

            `Admin hotel page for managing hotel records
                                                                                                                                                                                                                                                                                                                        <br><br> Admins can add, edit, or delete hotel records.
                                                                                                                                                                                                                                                                                                                            <br><br> Complete with error handling for incorrect and missing inputs, allowing admins to manage hotel records effectively.`,

            `Admin hotel add page for adding new hotel records`,

            `Admin flight page for managing flight records
                                                                                                                                                                                                                                                                                                                                <br><br> Admins can add, edit, or delete flight records.
                                                                                                                                                                                                                                                                                                                                    <br><br> Complete with error handling for incorrect and missing inputs, allowing admins to manage flight records effectively.`,

            `Admin flight add page for adding new flight records`,

            `Admin promo page for managing promo codes and offers
                                                                                                                                                                                                                                                                                                                                        <br><br> Admins can add, edit, or delete promo codes and manage their expiration dates.
                                                                                                                                                                                                                                                                                                                                            <br><br> Complete with error handling for incorrect and missing inputs, allowing admins to manage promo codes effectively.`,

            `Admin promo add page for adding new promo codes and offers`,

            `Admin transaction history page for viewing and managing all transactions`,

            `Admin users page for managing user accounts
                                                                                                                                                                                                                                                                                                                                                <br><br> Admins can ban or delete user accounts.`,

            `Admin FAQ page for managing frequently asked questions and their answers
                                                                                                                                                                                                                                                                                                                                                    <br><br> Admins can add, edit, or delete questions and answers.
                                                                                                                                                                                                                                                                                                                                                        <br><br> Complete with error handling for incorrect and missing inputs, allowing admins to manage FAQs effectively.`,

            `Admin FAQ add page for adding new frequently asked questions and their answers`,

            `Admin location page for managing locations and their details
                                                                                                                                                                                                                                                                                                                                                            <br><br> Admins can add, edit, or delete locations and manage their details.
                                                                                                                                                                                                                                                                                                                                                                <br><br> Complete with error handling for incorrect and missing inputs, allowing admins to manage locations effectively.`,

            `Admin location add page for adding new locations and their details`

        ]
    },
    'bloggers': {
        title: [
            'Bloggers – A Personal Blogging Platform',
            'Sign Up Page',
            'Sign In Page',
            'Admin Dashboard',
            'User Dashboard',
            'Blog Page',
            'Category Page',
            'Single Post Page',
            'About Us Page',
            'Contact Page'
        ],
        images: [
            'assets/blog/blog.png',
            'assets/blog/signup-page.png',
            'assets/blog/signin-page.png',
            'assets/blog/admin-dashboard.png',
            'assets/blog/user-dashboard.png',
            'assets/blog/blog-page.png',
            'assets/blog/category-page.png',
            'assets/blog/singe-post-page.png',
            'assets/blog/missionvision.png',
            'assets/blog/contact.png',

        ],
        descriptions: [

            `First PHP Project | Full Stack (HTML, CSS, JS, PHP, MySQL)
                                                                                                                                                                                                                                                                                                                                                                    <br><br>This project marked my first hands-on experience with backend development using PHP.
                                                                                                                                                                                                                                                                                                                                                                        I followed a YouTube tutorial to build a blogging platform where content creators can share anything about their lives.
                                                                                                                                                                                                                                                                                                                                                                        While it started as a guided walkthrough, it quickly became a deeper learning experience.
                                                                                                                                                                                                                                                                                                                                                                        <br><br>Along the way, I encountered unexpected bugs and errors not covered in the tutorial.
                                                                                                                                                                                                                                                                                                                                                                            This challenged me to step out of the “copy-and-follow” mindset and develop real problem-solving skills.
                                                                                                                                                                                                                                                                                                                                                                            I learned how to debug effectively, trace issues, and build an understanding of how different components of a web application interact.
                                                                                                                                                                                                                                                                                                                                                                            <br><br>This project taught me that tutorials are just starting points — true learning happens when things go wrong, and you figure out how to fix them.`,

            `Sign-up page for new users to create an account
                                                                                                                                                                                                                                                                                                                                                                                <br><br> Connects to the database to store user information.
                                                                                                                                                                                                                                                                                                                                                                                    <br><br>It includes a form for users to enter their name, email, and password, and a button to submit the form.
                                                                                                                                                                                                                                                                                                                                                                                        <br><br> Complete with error handling for duplicate users and missing inputs.`,

            `Sign-in page for user authentication
                                                                                                                                                                                                                                                                                                                                                                                            <br><br> Connects to the database to verify user credentials.
                                                                                                                                                                                                                                                                                                                                                                                                <br><br>It Includes a form for users to enter their email and password, and a button to submit the form.
                                                                                                                                                                                                                                                                                                                                                                                                    <br><br> Complete with error handling for incorrect credentials.
                                                                                                                                                                                                                                                                                                                                                                                                        <br><br>Upon successful login, users are redirected to their dashboard.`,

            `Admin dashboard for managing users and posts
                                                                                                                                                                                                                                                                                                                                                                                                            <br><br> Admins can add new categories, new posts, and new users and can manage existing ones.
                                                                                                                                                                                                                                                                                                                                                                                                                <br><br> It includes a list of all users, post categories and single posts, with options to edit or delete them.
                                                                                                                                                                                                                                                                                                                                                                                                                    <br><br> Admins can add featured posts and change the status of a user to admin.
                                                                                                                                                                                                                                                                                                                                                                                                                        <br><br> The dashboard is designed to be user-friendly and efficient complete with error handling for incorrect and missing inputs, allowing admins to manage the platform effectively.`,

            `User dashboard for managing personal posts
                                                                                                                                                                                                                                                                                                                                                                                                                            <br><br> Users can create new posts, edit existing ones, and delete posts.
                                                                                                                                                                                                                                                                                                                                                                                                                                <br><br> It includes a list of all posts created by the user, with options to edit or delete them.`,

            `The Blog page is where users can search for specific posts or topics
                                                                                                                                                                                                                                                                                                                                                                                                                                    <br><br> It is also where all posts can be viewed in a list format.
                                                                                                                                                                                                                                                                                                                                                                                                                                        <br><br> It includes a search bar and a list of recent posts.
                                                                                                                                                                                                                                                                                                                                                                                                                                            <br><br> Users can click on a post to view its content.`,

            `The Category page allows users to filter posts by categories
                                                                                                                                                                                                                                                                                                                                                                                                                                                <br><br> It includes a list of categories and a list of posts under each category.
                                                                                                                                                                                                                                                                                                                                                                                                                                                    <br><br> Users can click on a category to view all posts under that category.`,

            `The Single Post page displays the content of a specific post
                                                                                                                                                                                                                                                                                                                                                                                                                                                        <br><br> It includes the post title, content, author information, and the date and time of when the post wast published.`,

            `The About Us page provides information about "Bloggers"
                                                                                                                                                                                                                                                                                                                                                                                                                                                            <br><br> It includes the mission and vision of the platform, as well as information about the team behind it.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                <br><br> It aims to give users a sense of the platform's purpose and values.`,

            'The contact page allows users to reach out for support or inquiries'

        ]
    },
    'eclipse': {
        title: ['My First Real Website Project',
            'Home Page',
            'Java IDE Basics',
            'Java IDE Basics',
            'Java IDE Keybinds',
            'About Eclipse',
            'Installation'
        ],
        images: [
            'assets/eclipse/eclipse.png',
            'assets/eclipse/home-page.png',
            'assets/eclipse/ide-basics-1.png',
            'assets/eclipse/ide-basics-2.png',
            'assets/eclipse/ide-keybinds.png',
            'assets/eclipse/about.png',
            'assets/eclipse/installation.png'
        ],
        descriptions: [
            `This project was my very first actual test from my professors, and my first real step toward building a functioning website.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Through it, I learned how to create navigation bars, implement basic responsiveness, add a footer, and understand the importance of web design (though my design choices clearly showed how new I was at the time!).

                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <br><br>An interesting part of this project is that it was supposed to be a group task — but I ended up doing all the work myself.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        From that experience, I learned an important lesson: sometimes, your team can be more of a hindrance than a help.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Especially in tech, choosing the right people to work with can make or break a project.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Be cautious about who you team up with.`,

            `Home page of the Eclipse website
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <br><br> It includes a navigation bar, a footer, and a main content area.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <br><br> It highlights the key features of Eclipse IDE.`,

            `Basic features of Eclipse IDE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <br><br> It includes a list of features and a brief description of each one both in windows or MAC.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <br><br> It also includes images and screenshots of the IDE in action.`,

            'Basic features of Eclipse IDE pt. 2',

            `Basic keybinds of Eclipse IDE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <br><br> It includes a list of keybind shortcuts in eclipse and a brief description of each one.`,

            `About Eclipse IDE page
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <br><br> It includes a brief history of Eclipse IDE and its development.`,

            `Installation page for Eclipse IDE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <br><br> It includes step-by-step instructions on how to install Eclipse IDE on different operating systems.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <br><br> It also includes troubleshooting tips for common installation issues.`

        ]
    },
    'safirange-pharmacy': {
        title: [
            'Pharmacy Management System – My First Database Integration',
            'Login Page',
            'Employee Management Page',
            'Manufacturer Management Page',
            'Medicine Management Page',
            'Billing Page',
            'Dashboard Page',
            'Help Page'
        ],
        images: [
            'assets/pharmacy/pharmacy.png',
            'assets/pharmacy/login.png',
            'assets/pharmacy/employee-management.png',
            'assets/pharmacy/manufacturer-management.png',
            'assets/pharmacy/medicine-management.png',
            'assets/pharmacy/billing-page.png',
            'assets/pharmacy/dashboard.png',
            'assets/pharmacy/help.png'

        ],
        descriptions: [
            `This project was my first time integrating a working GUI with a database, and I learned a lot throughout the process.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        I was using Microsoft SQL Server, and this was also my first encounter with connection errors — which showed me just how tedious and tricky it can be to properly connect a database to your application.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        That alone was probably the hardest part of building this system.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <br><br>It was also my introduction to Visual Basic, a language I hadn't heard of until then.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Through this project, I also discovered what the tech industry often refers to as “systems” — like library systems, food ordering systems, and other kinds of management platforms.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            I came across many of these while browsing tutorials on YouTube.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <br><br>At this point in my journey, I started to feel like I was finally stepping out of the beginner stage.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Even though I knew I still had a long way to go, this project helped me begin to truly understand what being a developer means.`,

            `Login page for user authentication
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <br><br> Connects to the database to verify user credentials.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <br><br> It includes a form for users to enter their username and password, and a button to submit the form.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <br><br> It checks if the user is an admin or a regular user, and redirects them to the appropriate page.`,

            `Employee management page for managing employee records
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <br><br> It includes a list of all employees, with options to add, edit, or delete records.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <br><br> It also includes a search bar to filter employees by name or ID.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <br><br> Complete with error handling for incorrect and missing inputs, allowing admins to manage employee records effectively.`,

            `Manufacturer management page for managing manufacturer records
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <br><br> It includes a list of all manufacturers, with options to add, edit, or delete records.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <br><br> It also includes a search bar to filter manufacturers by name or ID.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <br><br> Complete with error handling for incorrect and missing inputs, allowing admins to manage manufacturer records effectively.`,

            `Medicine management page for managing medicine records
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <br><br> It includes a list of all medicines, with options to add, edit, or delete records.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <br><br> It also includes a search bar to filter medicines by name or ID.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <br><br> Complete with error handling for incorrect and missing inputs, allowing admins to manage medicine records effectively.`,

            `Billing page for processing sales transactions
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <br><br> It includes a list of all medicines, with options to add or remove them to the cart.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <br><br> In this page, users can select medicines, view the total amount, and process payments.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <br><br> If said medicines are not in stock, the system will alert the user and prevent them from proceeding with the transaction.`,

            `Dashboard page for displaying key metrics and statistics
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <br><br> It includes a summary of total sales, total medicines sold, and total customers served.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <br><br> It also includes a list of recent transactions.`,

            `Help page for providing assistance to users
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <br><br> It includes a list of contacts from the developers.`

        ]
    },
    'grocery-inventory': {
        title: [
            'Grocery Inventory System (Java)',
            'Inventory Page',
            'Payment Page',
            'Receipt Page',
        ],
        images: [
            'assets/grocery/grocery-inventory.png',
            'assets/grocery/inventory.png',
            'assets/grocery/payment.png',
            'assets/grocery/receipt.png',
        ],
        descriptions: [
            `This was my final project during my first year — a simple grocery inventory system.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        At the time, I had just started learning how to code and honestly didn’t even know what “inventory system” really meant.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        I just tried my best to make it work.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <br><br>Looking back, the biggest lesson I learned from this project is: don’t put everything in one file.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            I crammed all the logic, UI, and functionality into a single Java file that ended up being over 2,300 lines long.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            At the time, I was weirdly proud of writing that much code… but now I realize that writing clean, modular, and maintainable code is far more important than the number of lines.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <br><br>This project may not be impressive in terms of structure,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                and It doesn't even have a backend database but it was an important step in learning how not to code
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                — and that’s just as valuable.`,

            `Inventory page for managing grocery items
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <br><br> It includes a list of all items, automatically updating the stock quantity when a user buys.`,

            `Payment page for processing transactions
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <br><br> It includes a list of all items the user bought, with options to add or remove them to the cart.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <br><br> In this page, users can select items, view the total amount, and process payments.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <br><br> If said items are not in stock, the system will alert the user and prevent them from proceeding with the transaction.`,

            `Receipt page for displaying the transaction details
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <br><br> It includes a summary of the items purchased, the total amount, and the payment method used.`
        ]
    },

    'past-projects': {
        title: [
            'My Biggest Heartbreak',
            'Early SQL Activity',
            'Commissioned Work',
            'Commissioned Work',
            'Lost VB Activity',
            'PHP Activity',
            'PHP Activity',
            'PHP Activity',
            'PHP Activity',
            'PHP Activity',
            'PHP Activity',
            'PHP Activity',
            'Lost Java Activity',
            'Lost Java Activity',
            'Lost Java Activity',
            'Lost Java Activity',
            'Lost Java Activity',
            'Lost Java Activity',
            'Lost Java Activity',
            'Lost Java Activity',
            'Lost Java Activity',
            'Lost Java Activity'
        ],
        images: [
            'assets/lost-projects/lost.png',
            'assets/lost-projects/finaltermoutput.png',
            'assets/lost-projects/comissioned_work_1.png',
            'assets/lost-projects/comissioned_work_2.png',
            'assets/lost-projects/AppDev Activity (VBnet).png',
            'assets/lost-projects/Php_activity_1.png',
            'assets/lost-projects/Php_activity_2.png',
            'assets/lost-projects/Php_activity_3.png',
            'assets/lost-projects/Php_activity_4.png',
            'assets/lost-projects/Php_activity_5.png',
            'assets/lost-projects/Php_activity_6.png',
            'assets/lost-projects/Php_activity_7.png',
            'assets/lost-projects/java_ide.png',
            'assets/lost-projects/ide_2.png',
            'assets/lost-projects/ide_3.png',
            'assets/lost-projects/ide_4.png',
            'assets/lost-projects/ide_5.png',
            'assets/lost-projects/ide_6.png',
            'assets/lost-projects/ide_8.png',
            'assets/lost-projects/ide_9.png',
            'assets/lost-projects/ide_10.png',
            'assets/lost-projects/ide_7.png',
        ],
        descriptions: [
            `These are a mix of smaller activities assigned by our professors during the early years of college.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Most of them taught us the core basics of programming, with a strong focus on web development and Java.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    You’ll mostly see screenshots here, as many of the original files are now gone — but there’s a story, and a big lesson I want to share.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <br><br>You might be wondering, "Why isn’t this at the very beginning of your project list?"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        That’s because this section is more of a graveyard — a place for lost code, unrecovered files, and forgotten folders.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        While these aren’t technically my first programming attempts, they mark the moment I learned one of the biggest lessons in my journey:

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <br><br>ALWAYS BACK UP YOUR FILES!

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <br><br>Back then, I was working on a 2D game — about 30% complete — with my own custom assets.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Everything was stored on one external hard drive, and only there.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Eventually, due to age and wear, the HDD started slowing down and then completely failed.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                It just stopped working one day, and there was no way to recover anything from it.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                That drive held all my Java projects and my early experiments. Losing everything in an instant was my first real heartbreak as a developer.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <br><br>Since then, I’ve never made the same mistake again.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Now, I always back up my files — because no matter how small or early a project feels, it might mean everything later on.`,

            'An activity in SQL written in the command prompt',
            'A commissioned work for a friend who wanted to showcase her works in arts through a website portfolio.',
            'A commissioned work for a friend pt. 2.',
            'An activity in Visual Basic .NET that was lost due to a hard drive failure.',
            'A PHP activity that I did for a class pt. 1.',
            'A PHP activity that I did for a class pt. 2.',
            'A PHP activity that I did for a class pt. 3.',
            'A PHP activity that I did for a class pt. 4.',
            'A PHP activity that I did for a class pt. 5.',
            'A PHP activity that I did for a class pt. 6.',
            'A PHP activity that I did for a class pt. 7.',
            'An activity in Java that was lost due to a hard drive failure pt. 1.',
            'An activity in Java that was lost due to a hard drive failure pt. 2.',
            'An activity in Java that was lost due to a hard drive failure pt. 3.',
            'An activity in Java that was lost due to a hard drive failure pt. 4.',
            'An activity in Java that was lost due to a hard drive failure pt. 5.',
            'An activity in Java that was lost due to a hard drive failure pt. 6.',
            'An activity in Java that was lost due to a hard drive failure pt. 7.',
            'An activity in Java that was lost due to a hard drive failure pt. 8.',
            'An activity in Java that was lost due to a hard drive failure pt. 9.',
            'An asset made in Aseprite that was lost due to a hard drive failure.'
        ]
    },

    'basics': {
        title: [
            'The Beginning of My Tech Journey',
            'Periodic Table',
            'League of Legends Champion List',
            'UCC Professionals',
            'Resume'
        ],
        images: [
            'assets/html-basics/dashboard.png',
            'assets/html-basics/periodic-table.png',
            'assets/html-basics/league-list.png',
            'assets/html-basics/ucc-list.png',
            'assets/html-basics/resume.png'
        ],
        descriptions: [
            `This phase marks the start of my journey into Information Systems during my first year of college.
            At the time, I was completely new to programming and web development.
            Web development quickly became something I enjoyed, simply because it was the very first thing I learned in the course.

            <br><br> We were introduced to the basics — printing "Hello, World!", setting up a development environment, and linking CSS or JavaScript files.
            But after that, we weren’t taught much more about web development.
            From that point forward, we were left to figure things out on our own.

            <br><br>By completing activities and final projects assigned by our professors, I gradually learned how to start building on my own.
            More importantly, I realized that in this field, YouTube and Google are your best friends.
            That mindset became the foundation for how I continue to learn and grow in tech.`,

            'A simple periodic table page with basic HTML and CSS.',
            'League of Legends list page with team information and standings.',
            'UCC list page with course information and descriptions together with their respective professors.',
            'Resume page showcasing personal and professional details.'
        ]
    }


};
