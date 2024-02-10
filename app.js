var currentElement = null;
  
function showElement(elementId) {
  // Hide the currently displayed element
  if (currentElement) {
    currentElement.style.display = 'none';
  }

  // Show the new element
  var newElement = document.getElementById(elementId);
  newElement.style.display = 'block';

  // Update the currentElement variable
  currentElement = newElement;
}