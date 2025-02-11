$(document).ready(() => {
  const classroom = $("#classroomLayout")

  // Create podium
  classroom.append('<div class="podium"></div>')

  // Create tables and chairs
  const tablePositions = [
    { left: 50, top: 120 },
    { left: 290, top: 120 },
    { left: 530, top: 120 },
    { left: 50, top: 320 },
    { left: 290, top: 320 },
    { left: 530, top: 320 },
  ]

  tablePositions.forEach((position, index) => {
    const table = $('<div class="table"></div>').css(position)
    classroom.append(table)

    // Add chairs around each table
    const chairPositions = [
      { left: -20, top: 20 },
      { left: 120, top: 20 },
      { left: -20, top: 60 },
      { left: 120, top: 60 },
    ]

    chairPositions.forEach((chairPos) => {
      const chair = $('<div class="chair"></div>').css({
        left: position.left + chairPos.left,
        top: position.top + chairPos.top,
      })
      classroom.append(chair)
    })
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