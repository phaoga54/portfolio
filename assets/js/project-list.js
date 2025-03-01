// Define the projects array with enhanced details
const projects = [
  {
    id: 'soniq',
    title: 'Soniq',
    category: 'web development',
    image: './assets/images/OldProjectsScreenShoots/Soniq/app-icon.png',
    alt: 'soniq',
    description: 'Cleaning management system with scheduling and resource allocation',
    longDescription:'Soniq is a comprehensive digital platform that streamlines cleaning management through intelligent scheduling, time tracking, and real-time communication features. The app enables cleaning teams to coordinate work efficiently while providing management with complete oversight of operations.',
    technology: 'React Native, GraphQL, Mobx, AWS S3, AWS Cognito',
    screenshots: [
      './assets/images/OldProjectsScreenShoots/Soniq/soniq1.png',
      './assets/images/OldProjectsScreenShoots/Soniq/soniq2.png',
      './assets/images/OldProjectsScreenShoots/Soniq/soniq3.png',
      './assets/images/OldProjectsScreenShoots/Soniq/soniq4.png'
    ]
  },
  {
    id: 'kalaam',
    title: 'Kalaam',
    category: 'web development',
    image: './assets/images/OldProjectsScreenShoots/Kalaam/app-icon.png',
    alt: 'orizon',
    description: 'Language learning application with interactive lessons and progress tracking',
    longDescription: 'Kalaam is a free language learning application designed to help users understand Quranic Arabic through daily 10-minute lessons featuring active recall and spaced repetition techniques. The app provides a personalized learning path with vocabulary lessons, translation challenges, and a unique Quran-reading mode that visually demonstrates the user\'s progress as they work toward understanding up to 95% of the Quran within a year.',
    technology: 'React Native, Reanimated 2',
    screenshots: [
      './assets/images/OldProjectsScreenShoots/Kalaam/kalaam1.png',
      './assets/images/OldProjectsScreenShoots/Kalaam/kalaam2.png',
      './assets/images/OldProjectsScreenShoots/Kalaam/kalaam3.png',
      './assets/images/OldProjectsScreenShoots/Kalaam/kalaam4.png',
    ],
    features: [
      'Visual learning path via interactive progress chart',
      'Extensive animations with learning cards for vocabulary acquisition',
      'Text highlight and description box moving under text when pressed',
      'Daily lessons with contextual Quranic examples',
      'Personalized learning journey based on initial assessment',
      'Active recall with spaced repetition to ensure retention'
    ]
  },
  {
    id: 'dmw',
    title: 'DMW',
    category: 'web design',
    image: './assets/images/OldProjectsScreenShoots/DMW/app-icon.png',
    alt: 'fundo',
    description: 'Philippines Department of Migrant Workers portal with resource management',
    technology: 'React Native, GraphQL, Redux, Firebase, AWS Location Service, AWS S3, AWS Cognito, Firebase Push Notification',
    screenshots: [
      './assets/images/OldProjectsScreenShoots/DMW/dmw1.png',
      './assets/images/OldProjectsScreenShoots/DMW/dmw2.png',
      './assets/images/OldProjectsScreenShoots/DMW/dmw3.png',
      './assets/images/OldProjectsScreenShoots/DMW/dmw4.png'
    ],
    longDescriton:"Designed specifically for Overseas Filipino Workers (OFWs), the Department of Migrant Workers – DMW Mobile App is an online platform that enables OFWs quick access to the department’s services.",
    features:[
      "QR/Barcode Scanner",
      "KYC Verification via 3rd party",
      "AWS Location Service",
    ]
  },
  {
    id: 'eveno',
    title: 'Eveno',
    category: 'applications',
    image: './assets/images/OldProjectsScreenShoots/Eveno/app-icon.png',
    alt: 'brawlhalla',
    description: 'Local events discovery application with geolocation and social features',
    technology: 'React Native Expo, Firebase Authentication, Google Maps API, Facebook SDK, Firebase Push Notification',
    screenshots: [
      './assets/images/OldProjectsScreenShoots/Eveno/eveno1.png',
      './assets/images/OldProjectsScreenShoots/Eveno/eveno2.png',
      './assets/images/OldProjectsScreenShoots/Eveno/eveno3.png',
      './assets/images/OldProjectsScreenShoots/Eveno/eveno4.png'
    ],
    longDescription:"Eveno is a social platform that helps users discover and share local events. Users can create events, share them with friends, and view events happening nearby. The app also features a chat system for users to communicate with event organizers and other attendees.",
    features:[
      "Event creation and sharing",
      "Real-time chat system",
      "Geolocation-based event discovery",
      "Social media integration"
    ]
  },
  {
    id: 'combatgo',
    title: 'Combat GO.',
    category: 'web design',
    image: './assets/images/OldProjectsScreenShoots/CombatGo/app-icon.png',
    alt: 'dsm',
    description: 'Boxing training application with workout plans and technique videos',
    technology: 'React Native, Redux, Firebase, Chart',
    screenshots: [
      './assets/images/OldProjectsScreenShoots/CombatGo/combatgo1.png',
      './assets/images/OldProjectsScreenShoots/CombatGo/combatgo2.png',
      './assets/images/OldProjectsScreenShoots/CombatGo/combatgo3.png',
      './assets/images/OldProjectsScreenShoots/CombatGo/combatgo4.png'
    ],
    longDescription:"Combat GO is a comprehensive boxing training app delivering personalized workout plans, technique videos, and detailed progress tracking to help users improve their skills and reach fitness goals. The app features an extensive library of boxing drills and exercises that users can follow along with, as well as customized training schedules tailored to individual skill levels and objectives. Beyond personal training, Combat GO incorporates social media functionality that allows users to share their training results and achievements with the community, fostering motivation and friendly competition among boxing enthusiasts.",
    features:[
      "Pixel-perfect UI design",
      "Clock timer for workout duration",
      "Video player with playback controls",
      "Progress tracking via charts and graphs",
      "Social media functionality"
    ]
    
  },
  {
    id: 'cavaraty',
    title: 'Cavaraty',
    category: 'web design',
    image: './assets/images/OldProjectsScreenShoots/Cavaraty/app-icon.png',
    alt: 'metaspark',
    description: 'E-commerce application with product catalog and secure payment processing',
    technology: 'React Native, Redux, Firebase',
    screenshots: [
      './assets/images/OldProjectsScreenShoots/Cavaraty/cavaraty1.png',
      './assets/images/OldProjectsScreenShoots/Cavaraty/cavaraty2.webp',
      './assets/images/OldProjectsScreenShoots/Cavaraty/cavaraty3.webp',
      './assets/images/OldProjectsScreenShoots/Cavaraty/cavaraty4.webp'
    ],
    longDescription:"Cavaraty is an e-commerce platform specializing in electronic gadgets and accessories, offering a diverse product catalog with secure payment processing. The app delivers a seamless shopping experience through its user-friendly interface and intuitive navigation, making it easy for customers to browse products and complete transactions. With real-time order tracking and personalized recommendations, Cavaraty enhances the overall shopping journey from discovery to delivery.",
    features:[
      "Product catalog with detailed descriptions",
      "Secure payment processing",
      "User-friendly interface",
      "Firebase Push Notification",
    ]
  },
  {
    id: 'nulapay',
    title: 'NulaPay',
    category: 'web development',
    image: './assets/images/OldProjectsScreenShoots/NulaPay/app-icon.png',
    alt: 'nulapay',
    description: 'Money transfer application',
    technology: 'React Native, Stripe, Firebase, AWS S3, AWS Cognito',
    screenshots: [
      './assets/images/OldProjectsScreenShoots/NulaPay/nulapay1.png',
      './assets/images/OldProjectsScreenShoots/NulaPay/nulapay2.png',
      './assets/images/OldProjectsScreenShoots/NulaPay/nulapay3.png',
      './assets/images/OldProjectsScreenShoots/NulaPay/nulapay4.png'
    ],
    longDescription:"NulaPay is a money transfer application that allows users to send and receive funds securely and conveniently. The app integrates with Stripe for payment processing and Firebase for user authentication and data storage, ensuring a seamless and reliable transaction experience. With NulaPay, users can manage their finances, track transaction history, and receive real-time notifications for added security and peace of mind.",
    features:[
      "Money transfer functionality via Stripe",
      "Firebase Push Notification",
      "User-friendly interface"
    ]
  },
  {
    id: 'puravidabitcoin',
    title: 'PuraVida Bitcoin',
    category: 'web development',
    image: './assets/images/OldProjectsScreenShoots/PuravidaBitcoin/app-icon.png',
    alt: 'puravidabitcoin',
    description: 'Bitcoin Wallet & Marketplace',
    technology: 'React Native, Firebase, Google Maps API, Lighning Network',
    screenshots: [
      './assets/images/OldProjectsScreenShoots/PuravidaBitcoin/puravida1.png',
      './assets/images/OldProjectsScreenShoots/PuravidaBitcoin/puravida2.png',
      './assets/images/OldProjectsScreenShoots/PuravidaBitcoin/puravida3.png',
    ],
    longDescription:"PuraVida Bitcoin combines secure money transfers with an integrated marketplace, allowing users to both manage funds and shop using cryptocurrency. The app leverages Stripe for payment processing and Firebase for authentication, ensuring reliable transactions across all platform functions. Real-time notifications and comprehensive tracking provide users with a seamless experience whether sending money or making purchases.",
    features:[
      "Firebase Push Notification",
      "User-friendly interface",
      "Google Maps API",
      "Marketplace functionality"
    ]
  },
];
window.globalProjects = projects;

// Function to generate project list
function generateProjectList() {
  const projectListContainer = document.querySelector('.project-list');
  
  if (projectListContainer) {
    projectListContainer.innerHTML = '';
    
    projects.forEach(project => {
      const projectItem = document.createElement('li');
      projectItem.className = 'project-item active';
      projectItem.setAttribute('data-filter-item', '');
      projectItem.setAttribute('data-category', project.category);
      projectItem.setAttribute('data-project-id', project.id);
      
      projectItem.innerHTML = `
        <a href="#" class="project-link">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${project.image}" alt="${project.alt}" loading="lazy">
          </figure>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-category">${project.description}</p>
        </a>
      `;
      
      projectListContainer.appendChild(projectItem);
    });
    
    // Add event listeners to project items for modals
    setupProjectModalListeners();
  }
}

// Function to setup modal listeners
function setupProjectModalListeners() {
  const projectLinks = document.querySelectorAll('.project-link');
  const modal = document.getElementById('project-modal');
  const closeModal = document.getElementById('close-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalTech = document.getElementById('modal-tech');
  const modalDescription = document.getElementById('modal-description');
  const modalScreenshots = document.getElementById('modal-screenshots');
  
  projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const projectId = this.closest('.project-item').getAttribute('data-project-id');
      const project = projects.find(p => p.id === projectId);
      
      if (project) {
        modalTitle.textContent = project.title;
        modalTech.textContent = project.technology;
        modalDescription.textContent = project.description;
        
        // Clear previous screenshots
        modalScreenshots.innerHTML = '';
        
        // Add screenshots
        project.screenshots.forEach(screenshot => {
          const img = document.createElement('img');
          img.src = screenshot;
          img.alt = project.title;
          img.style.width = '200px';
          img.style.height = 'auto';
          img.style.borderRadius = '8px';
          modalScreenshots.appendChild(img);
        });
        
        // Show modal
        modal.style.display = 'flex';
      }
    });
  });
  
  // Close modal
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  generateProjectList();
  
  // Setup filter functionality
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filterValue = this.textContent.toLowerCase();
      const projectItems = document.querySelectorAll('.project-item');
      
      projectItems.forEach(item => {
        if (filterValue === 'all') {
          item.classList.add('active');
        } else {
          if (item.getAttribute('data-category') === filterValue) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        }
      });
    });
  });
  
  // Setup select filter functionality
  const selectItems = document.querySelectorAll('[data-select-item]');
  const selectValue = document.querySelector('[data-selecct-value]');
  
  selectItems.forEach(item => {
    item.addEventListener('click', function() {
      const value = this.textContent.toLowerCase();
      
      if (selectValue) {
        selectValue.textContent = this.textContent;
      }
      
      const projectItems = document.querySelectorAll('.project-item');
      
      projectItems.forEach(item => {
        if (value === 'all') {
          item.classList.add('active');
        } else {
          if (item.getAttribute('data-category') === value) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        }
      });
    });
  });
});