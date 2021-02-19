window.onload = function () {
  lax.init()

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
    return window.scrollY
  })

  // Add animation bindings to elements
  lax.addElements('.title', {
      scrollY: {                // Driver name
        translateX: [           // CSS property
          [0, 150],  // Driver value map
          ['screenWidth', 0],   // Animation value map
          {
            inertia: 10        // Options
          }
        ],

      }
  })
  lax.addElements('.title-2', {
    scrollY: {
      translateX: [
        [0, 150],  // Driver value map
        [0, 'elCenterY'],   // Animation value map
      ]
    }
  })
}