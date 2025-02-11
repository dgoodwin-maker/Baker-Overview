$(document).ready(() => {
  const classroom = $("#classroomLayout")

  // Create podium
  classroom.append('<div class="podium"></div>')

  // Create tables and chairs
  const tablePositions = [
    { left: 50, top: 100 },
    { left: 200, top: 100 },
    { left: 350, top: 100 },
    { left: 50, top: 250 },
    { left: 200, top: 250 },
    { left: 350, top: 250 },
  ]

  tablePositions.forEach((position, index) => {
    const table = $('<div class="table"></div>').css(position)
    classroom.append(table)

    // Add chairs to each table
    for (let i = 0; i < 4; i++) {
      const chairPosition = {
        left: position.left + (i % 2) * 60,
        top: position.top + Math.floor(i / 2) * 40,
      }
      const chair = $('<div class="chair"></div>').css(chairPosition)
      classroom.append(chair)
    }
  })

  // Make the podium draggable
  $(".podium").draggable({
    containment: "#classroomLayout",
    stop: (event, ui) => {
      console.log("Podium position:", ui.position)
    },
  })

  // Log a message to the console
  console.log("Classroom layout initialized")
})

// Work in Progress
