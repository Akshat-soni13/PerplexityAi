import { useEffect, useRef } from "react";

const EnergyTrailSnake = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let animationId;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const snakes = [
        {
          amp: 120,
          speed: 0.015,
          width: 8,
          opacity: 1,
        },
        {
          amp: 80,
          speed: 0.01,
          width: 4,
          opacity: 0.5,
        },
      ];

      snakes.forEach((snake, index) => {
        ctx.beginPath();

        for (let x = 0; x <= canvas.width; x += 8) {
          const y =
            canvas.height / 2 +
            Math.sin(x * 0.008 + time * snake.speed * 100) *
              snake.amp +
            Math.cos(x * 0.004 + time * 0.7 + index) *
              (snake.amp / 2);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        const gradient = ctx.createLinearGradient(
          0,
          0,
          canvas.width,
          0
        );

        gradient.addColorStop(0, "#B8860B");
        gradient.addColorStop(0.5, "#FFD700");
        gradient.addColorStop(1, "#FFF4B0");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = snake.width;

        ctx.shadowBlur = 35;
        ctx.shadowColor = "#FFD700";
        ctx.globalAlpha = snake.opacity;

        ctx.stroke();
      });

      ctx.globalAlpha = 1;

      time += 0.02;

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        fixed
        inset-0
        z-0
        pointer-events-none
      "
    />
  );
};

export default EnergyTrailSnake;