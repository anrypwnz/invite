window.onload = function () {
  lax.init()

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
    return window.scrollY
  })

  // Add animation bindings to elements
  lax.addElements('.title1', {
    scrollY: {
        translateX: [
            ["elOutY", "elCenterY", "elInY"],
            [200, 'screenWidth/2', 'screenWidth'],
        ],
        blur: [
            [0, 100],
            [30, 0]
        ],

    }
})

lax.addElements('.title2', {
    scrollY: {
        translateX: [
            ["elOutY", "elCenterY", "elInY"],
            ['screenWidth', 'screenWidth/4', 'screenWidth/4'],
        ],
        scaleX: [
            [0, 100, 400],
            [15, 15, 1],
        ],
        skewY: [
            ["elOutY", "elCenterY", "elInY"],
            [10, 1, 1],
        ]

    }
})

lax.addElements('.title3', {
    scrollY: {
        scale: [
            [0, 1200],
            [2, 1],
        ],
        translateX: [
            ["elOutY", "elCenterY", "elInY"],
            [10, 80, 300],
        ],

    }
})

lax.addElements('.text', {
    scrollY: {
        rotate: [
            ["elOutY", "elCenterY", "elInY"],
            [120, 0, 0],
        ],
        blur: [
            ["elOutY", "elCenterY", "elInY"],
            [10, 0, 30],
        ],

    }
})
}