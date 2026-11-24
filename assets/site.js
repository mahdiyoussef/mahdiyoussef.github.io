const filterGroup = document.querySelector(".filters");
const cards = [...document.querySelectorAll(".project-card")];

if (filterGroup) {
  filterGroup.hidden = false;
  const buttons = [...filterGroup.querySelectorAll("button")];
  const status = document.querySelector("#filter-status");

  for (const button of buttons) {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;

      for (const option of buttons) {
        option.setAttribute("aria-pressed", String(option === button));
      }

      for (const card of cards) {
        card.hidden = category !== "all" && card.dataset.category !== category;
      }

      const count = cards.filter((card) => !card.hidden).length;
      status.textContent = `${count} ${count === 1 ? "project" : "projects"} shown.`;
    });
  }
}

function line(context, points, color, width = 1) {
  context.beginPath();
  for (const [index, [x, y]] of points.entries()) {
    if (index === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  }
  context.strokeStyle = color;
  context.lineWidth = width;
  context.stroke();
}

function grid(context, color, step = 34) {
  for (let x = 19; x < 640; x += step) {
    line(context, [[x, 0], [x, 300]], color);
  }
  for (let y = 15; y < 300; y += step) {
    line(context, [[0, y], [640, y]], color);
  }
}

function climate(context) {
  grid(context, "#52663b28");
  for (let ring = 0; ring < 16; ring += 1) {
    const contour = Array.from({ length: 130 }, (_, index) => {
      const angle = index / 129 * Math.PI * 2;
      const radius = 20 + ring * 11 + 11 * Math.sin(angle * 3 + ring * .08) + 8 * Math.cos(angle * 5);
      return [395 + Math.cos(angle) * radius * 1.67, 133 + Math.sin(angle) * radius * .84 + Math.sin(angle * 2) * radius * .23];
    });
    line(context, contour, ring % 4 === 0 ? "#527335" : "#769346", ring % 4 === 0 ? 1.65 : 1);
  }

  for (const [x, y] of [[183, 108], [246, 181], [355, 141], [439, 81], [512, 173], [488, 215]]) {
    context.beginPath();
    context.arc(x, y, 4, 0, 2 * Math.PI);
    context.fillStyle = "#203f2c";
    context.fill();
  }
}

function vision(context) {
  grid(context, "#d2e5ac25");
  context.strokeStyle = "#a9cc73";
  context.lineWidth = 1.25;
  context.strokeRect(76, 42, 488, 209);
  context.strokeRect(282, 77, 173, 139);
  context.strokeRect(117, 98, 123, 84);
  context.strokeRect(472, 89, 66, 76);
  line(context, [[0, 152], [640, 152]], "#e6fbb0", 1.5);
  line(context, [[368, 34], [368, 252]], "#a9cc7380");
  for (const [x, y, w] of [[117, 98, 64], [282, 77, 83], [472, 89, 35]]) {
    context.fillStyle = "#d6f36f";
    context.fillRect(x, y - 7, w, 7);
  }
}

function eeg(context) {
  grid(context, "#6c746b25");
  context.fillStyle = "#cbdc8a";
  context.fillRect(367, 0, 63, 300);
  for (let track = 0; track < 4; track += 1) {
    const trace = Array.from({ length: 330 }, (_, index) => {
      const x = index * 2;
      const amplitude = 1 + Math.exp(-Math.pow((x - 398) / 36, 2)) * 2.9;
      const sample = Math.sin(index * .23 + track * 1.9) * 4 + Math.sin(index * .65 + track) * 2.4 + Math.sin(index * 1.9) * 1.7;
      return [x, 51 + track * 57 + sample * amplitude];
    });
    line(context, trace, track === 1 ? "#263f2e" : "#62774d", 1.5);
  }
}

function rag(context) {
  grid(context, "#b9d8a01d");
  const columns = [[72, [70, 144, 218]], [245, [55, 116, 177, 238]], [410, [83, 150, 217]], [563, [150]]];
  for (const [index, [x, ys]] of columns.entries()) {
    const next = columns[index + 1];

    for (const y of ys) {
      if (next) {
        for (const nextY of next[1]) {
          line(context, [[x, y], [x + 58, y], [next[0] - 58, nextY], [next[0], nextY]], "#a4c57a69");
        }
      }

      context.fillStyle = index === columns.length - 1 ? "#d6f36f" : "#8eb75c";
      context.strokeStyle = "#daeac0";
      context.lineWidth = 1;
      context.fillRect(x - 8, y - 8, 16, 16);
      context.strokeRect(x - 14, y - 14, 28, 28);
    }
  }
}

function iot(context) {
  grid(context, "#5b784325");
  line(context, [[315, 25], [315, 254]], "#3a5640", 1.4);
  for (let row = 0; row < 8; row += 1) {
    for (let index = 0; index < 42; index += 1) {
      const width = 165 - row * 12;
      const x = 315 + Math.sin(index * 2.39 + row * .8) * width * (.22 + (index % 11) / 15);
      const y = 42 + row * 25 + Math.sin(index * 1.61) * 7;
      context.beginPath();
      context.arc(x, y, 2.75, 0, 2 * Math.PI);
      context.fillStyle = index % 3 === 0 ? "#355d43af" : "#8b632da7";
      context.fill();
    }
  }
}

function finance(context) {
  grid(context, "#77765c2b");
  for (let stage = 0; stage < 4; stage += 1) {
    const left = 43 + stage * 148;
    for (let row = 0; row < 5; row += 1) {
      const top = 49 + row * 36;
      context.fillStyle = ["#ddd9bc", "#c8d39a", "#a6bb76", "#496b4b"][stage];
      context.fillRect(left, top, 112, 19);
      for (let tick = 1; tick < 5; tick += 1) {
        line(context, [[left + tick * 18, top + 3], [left + tick * 18, top + 16]], stage === 3 ? "#e6efc0" : "#637855");
      }
    }
    if (stage < 3) {
      line(context, [[left + 112, 131], [left + 148, 131]], "#425b3a", 2);
    }
  }
}

const illustrations = { climate, vision, eeg, rag, iot, finance };
for (const canvas of document.querySelectorAll("canvas[data-art]")) {
  const context = canvas.getContext("2d");
  if (context) {
    illustrations[canvas.dataset.art](context);
  }
}
