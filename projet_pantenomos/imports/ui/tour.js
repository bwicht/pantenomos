import '../templates/tour.html'

var tour = new Tour({
    steps: [
    {
      element: ".survey",
      title: "Title of my step",
      content: "Content of my step"
    },
    {
      element: "#my-other-element",
      title: "Title of my step",
      content: "Content of my step"
    }
  ]});
  
  // Initialize the tour
  tour.init();
  
  // Start the tour
  tour.start();