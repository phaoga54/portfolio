//modal.js
// Enhanced project modal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Update project data structure to include features
  // This should be added to your project-list.js file
  window.updateProjectData = function() {
    const projects = window.globalProjects || [];
    
    // Add features and enhanced descriptions if they don't exist
    projects.forEach(project => { 
      
      // Add longDescription if it doesn't exist
      if (!project.longDescription) {
        project.longDescription = project.description + ' ' + 
          "This application was designed with user experience in mind, focusing on both functionality and aesthetics. " +
          "The interface is intuitive and responsive, providing a seamless experience across different devices. " +
          "Development involved close collaboration with stakeholders to ensure all requirements were met while maintaining high performance standards.";
      }
    });
    
    window.globalProjects = projects;
    return projects;
  };
  
  // Update project data
  const projects = updateProjectData();
  
  // Add click events to all project items
  const projectItems = document.querySelectorAll('.project-item');
  
  projectItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get project ID
      const projectId = this.getAttribute('data-project-id');
      
      // Find matching project
      const project = projects.find(p => p.id === projectId);
      
      if (project) {
        showProject(project);
      }
    });
  });
  
  // Function to find the next and previous project
  function getAdjacentProject(currentProjectId, direction) {
    const projects = window.globalProjects || [];
    const currentIndex = projects.findIndex(p => p.id === currentProjectId);
    
    if (currentIndex === -1) return null;
    
    // Calculate next index with wrap-around
    const nextIndex = (currentIndex + direction + projects.length) % projects.length;
    return projects[nextIndex];
  }
  
  // Screenshot gallery variables
  let currentScreenshotIndex = 0;
  let currentProject = null;
  
  // Close button functionality
  const closeButton = document.getElementById('close-modal');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      hideModal();
    });
  }
  
  // Close when clicking outside modal content
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        hideModal();
      }
    });
  }
  
  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!modal || modal.style.display !== 'flex') return;
    
    switch(e.key) {
      case 'Escape':
        hideModal();
        break;
      case 'ArrowLeft':
        navigateScreenshot(-1);
        break;
      case 'ArrowRight':
        navigateScreenshot(1);
        break;
      case 'PageUp':
        const prevProject = getAdjacentProject(currentProject.id, -1);
        if (prevProject) showProject(prevProject);
        break;
      case 'PageDown':
        const nextProject = getAdjacentProject(currentProject.id, 1);
        if (nextProject) showProject(nextProject);
        break;
    }
  });
  
  // Screenshot navigation
  document.addEventListener('click', function(e) {
    if (e.target.id === 'prev-screenshot') {
      navigateScreenshot(-1);
    } else if (e.target.id === 'next-screenshot') {
      navigateScreenshot(1);
    }
  });
  
  // Function to navigate screenshots
  function navigateScreenshot(direction) {
    if (!currentProject || !currentProject.screenshots || currentProject.screenshots.length <= 1) return;
    
    currentScreenshotIndex = (currentScreenshotIndex + direction + currentProject.screenshots.length) % currentProject.screenshots.length;
    updateMainScreenshot();
    updateIndicators();
  }
  
  // Function to update the main screenshot
  function updateMainScreenshot() {
    const mainScreenshot = document.getElementById('modal-main-screenshot');
    if (!mainScreenshot || !currentProject) return;
    
    // Add a tiny fade effect
    mainScreenshot.style.opacity = '0.7';
    mainScreenshot.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      mainScreenshot.src = currentProject.screenshots[currentScreenshotIndex];
      mainScreenshot.style.opacity = '1';
      mainScreenshot.style.transform = 'scale(1)';
    }, 200);
    
    // Update thumbnails to show which is active
    const thumbnails = document.querySelectorAll('.screenshot-thumbnail');
    thumbnails.forEach((thumb, index) => {
      if (index === currentScreenshotIndex) {
        thumb.style.opacity = '1';
        thumb.style.border = '2px solid #f9ab00';
      } else {
        thumb.style.opacity = '0.6';
        thumb.style.border = '2px solid transparent';
      }
    });
  }
  
  // Function to update indicators
  function updateIndicators() {
    const indicators = document.getElementById('modal-indicators');
    if (!indicators || !currentProject) return;
    
    const dots = indicators.querySelectorAll('.indicator-dot');
    dots.forEach((dot, index) => {
      if (index === currentScreenshotIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // Function to hide modal with animation
  function hideModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    modal.style.opacity = '0';
    
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 300);
  }
  
  // Function to show project details with enhanced animation
  function showProject(project) {
    // Set current project
    currentProject = project;
    currentScreenshotIndex = 0;
    
    // Get modal elements
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const techContainer = document.getElementById('modal-tech-container');
    const description = document.getElementById('modal-description');
    const features = document.getElementById('modal-features');
    const screenshotsContainer = document.getElementById('modal-screenshots-container');
    const mainScreenshot = document.getElementById('modal-main-screenshot');
    const thumbnails = document.getElementById('modal-thumbnails');
    const indicators = document.getElementById('modal-indicators');
    
    // Update content
    title.textContent = project.title;
    
    // Update technologies with icons
    techContainer.innerHTML = '';
    const technologies = project.technology.split(', ');
    
    technologies.forEach(tech => {
      const techBadge = document.createElement('div');
      techBadge.style.background = '#f9ab00';
      techBadge.style.color = '#222';
      techBadge.style.padding = '6px 12px';
      techBadge.style.borderRadius = '6px';
      techBadge.style.fontSize = '14px';
      techBadge.style.fontWeight = '500';
      techBadge.style.display = 'flex';
      techBadge.style.alignItems = 'center';
      techBadge.style.gap = '6px';
      
      // Add icon based on technology
      let iconName = 'code-outline';
      if (tech.toLowerCase().includes('react')) iconName = 'logo-react';
      else if (tech.toLowerCase().includes('firebase')) iconName = 'cloud-outline';
      else if (tech.toLowerCase().includes('redux')) iconName = 'repeat-outline';
      else if (tech.toLowerCase().includes('native')) iconName = 'phone-portrait-outline';
      else if (tech.toLowerCase().includes('graph')) iconName = 'git-network-outline';
      else if (tech.toLowerCase().includes('stripe')) iconName = 'card-outline';
      else if (tech.toLowerCase().includes('map')) iconName = 'map-outline';
      else if (tech.toLowerCase().includes('expo')) iconName = 'phone-portrait-outline';
      // Additional technology icons
      else if (tech.toLowerCase().includes('mobx')) iconName = 'sync-outline';
      else if (tech.toLowerCase().includes('reanimated')) iconName = 'move-outline';
      else if (tech.toLowerCase().includes('aws')) iconName = 'cloud-upload-outline';
      else if (tech.toLowerCase().includes('chart')) iconName = 'stats-chart-outline';
      else if (tech.toLowerCase().includes('facebook')) iconName = 'logo-facebook';
      else if (tech.toLowerCase().includes('authentication')) iconName = 'key-outline';
      else if (tech.toLowerCase().includes('notification')) iconName = 'notifications-outline';
      
      techBadge.innerHTML = `<ion-icon name="${iconName}" style="font-size: 16px;"></ion-icon> ${tech}`;
      techContainer.appendChild(techBadge);
    });
    
    // Update description
    description.textContent = project.longDescription || project.description;
    
    // Update features
    features.innerHTML = '';
    if (project.features && project.features.length > 0) {
      project.features.forEach(feature => {
        const li = document.createElement('li');
        li.style.marginBottom = '8px';
        li.style.lineHeight = '1.5';
        li.textContent = feature;
        features.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'Custom development tailored to client requirements';
      features.appendChild(li);
    }
    
    // Clear previous thumbnails and indicators
    thumbnails.innerHTML = '';
    indicators.innerHTML = '';
    
    // Add main screenshot if available
    if (project.screenshots && project.screenshots.length > 0) {
      mainScreenshot.src = project.screenshots[0];
      mainScreenshot.alt = `${project.title} screenshot`;
      
      // Add thumbnails
      project.screenshots.forEach((src, index) => {
        // Create thumbnails
        const thumbnail = document.createElement('img');
        thumbnail.src = src;
        thumbnail.alt = `${project.title} thumbnail ${index + 1}`;
        thumbnail.className = 'screenshot-thumbnail';
        thumbnail.style.width = '80px';
        thumbnail.style.height = '80px';
        thumbnail.style.objectFit = 'cover';
        thumbnail.style.borderRadius = '6px';
        thumbnail.style.cursor = 'pointer';
        thumbnail.style.transition = 'all 0.2s';
        thumbnail.style.opacity = index === 0 ? '1' : '0.6';
        thumbnail.style.border = index === 0 ? '2px solid #f9ab00' : '2px solid transparent';
        
        thumbnail.addEventListener('click', function() {
          currentScreenshotIndex = index;
          updateMainScreenshot();
          updateIndicators();
        });
        
        thumbnails.appendChild(thumbnail);
        
        // Create indicators
        const indicator = document.createElement('div');
        indicator.className = `indicator-dot ${index === 0 ? 'active' : ''}`;
        indicator.style.width = '10px';
        indicator.style.height = '10px';
        indicator.style.borderRadius = '50%';
        indicator.style.backgroundColor = index === 0 ? '#f9ab00' : 'rgba(255,255,255,0.3)';
        indicator.style.transition = 'background-color 0.3s';
        
        indicators.appendChild(indicator);
      });
      
      // Show/hide navigation based on screenshot count
      const prevBtn = document.getElementById('prev-screenshot');
      const nextBtn = document.getElementById('next-screenshot');
      
      if (project.screenshots.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
      }
    } else {
      // Hide screenshots section if no screenshots available
      document.getElementById('modal-screenshots-container').style.display = 'none';
    }
    
    // Remove existing project navigation buttons if any
    const existingPrevBtn = document.getElementById('prev-project');
    const existingNextBtn = document.getElementById('next-project');
    if (existingPrevBtn) existingPrevBtn.remove();
    if (existingNextBtn) existingNextBtn.remove();
    
    // Create new project navigation buttons
    const prevProjectBtn = document.createElement('button');
    prevProjectBtn.id = 'prev-project';
    prevProjectBtn.innerHTML = '<ion-icon name="chevron-back-outline"></ion-icon>';
    prevProjectBtn.setAttribute('title', 'Previous Project');
    prevProjectBtn.className = 'project-nav-btn prev-project-btn';
    
    const nextProjectBtn = document.createElement('button');
    nextProjectBtn.id = 'next-project';
    nextProjectBtn.innerHTML = '<ion-icon name="chevron-forward-outline"></ion-icon>';
    nextProjectBtn.setAttribute('title', 'Next Project');
    nextProjectBtn.className = 'project-nav-btn next-project-btn';
    
    // Add event listeners to the project navigation buttons
    prevProjectBtn.addEventListener('click', function() {
      const prevProject = getAdjacentProject(project.id, -1);
      if (prevProject) {
        // Add a small transition effect
        modal.style.opacity = '0.7';
        setTimeout(() => {
          showProject(prevProject);
          modal.style.opacity = '1';
        }, 300);
      }
    });
    
    nextProjectBtn.addEventListener('click', function() {
      const nextProject = getAdjacentProject(project.id, 1);
      if (nextProject) {
        // Add a small transition effect
        modal.style.opacity = '0.7';
        setTimeout(() => {
          showProject(nextProject);
          modal.style.opacity = '1';
        }, 300);
      }
    });
    
    // Add buttons to modal
    modal.appendChild(prevProjectBtn);
    modal.appendChild(nextProjectBtn);
    
    // Show modal with animation
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    setTimeout(() => {
      modal.style.opacity = '1';
      document.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
  }
  
  // Initialize the navigation buttons if projects are already loaded
  if (window.globalProjects && window.globalProjects.length > 0) {
    // Make sure project items have event listeners
    const projectItems = document.querySelectorAll('.project-item');
    if (projectItems.length === 0) {
      console.warn('No project items found to attach event listeners to.');
    }
  } else {
    console.warn('Global projects not found. Navigation may not work correctly.');
  }
});