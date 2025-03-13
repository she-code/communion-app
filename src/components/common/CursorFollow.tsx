// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const CursorFollow = () => {
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   // Update cursor position on mousemove
//   useEffect(() => {
//     const updateCursorPosition = (e: MouseEvent) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//     };

//     // Add mousemove event listener to update position
//     window.addEventListener("mousemove", updateCursorPosition);

//     return () => {
//       window.removeEventListener("mousemove", updateCursorPosition);
//     };
//   }, []);

//   return (
//     <div>
//       {/* Main cursor element */}
//       <motion.div
//         style={{
//           position: "absolute",
//           pointerEvents: "none",
//           top: cursorPos.y - 15, // Adjust to the cursor size
//           left: cursorPos.x - 15, // Adjust to the cursor size
//           width: "30px",
//           height: "30px",
//           backgroundColor: "#ff6347", // Customize the color
//           borderRadius: "50%",
//           zIndex: 9999,
//         }}
//         initial={{ x: -50, y: -50 }}
//         animate={{ x: cursorPos.x - 15, y: cursorPos.y - 15 }}
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       />

//       {/* Additional cursor elements */}
//       <motion.div
//         style={{
//           position: "absolute",
//           pointerEvents: "none",
//           top: cursorPos.y - 40,
//           left: cursorPos.x - 40,
//           width: "25px",
//           height: "25px",
//           backgroundColor: "#00bcd4",
//           borderRadius: "50%",
//           zIndex: 9999,
//         }}
//         initial={{ x: -50, y: -50 }}
//         animate={{ x: cursorPos.x - 40, y: cursorPos.y - 40 }}
//         transition={{ type: "spring", stiffness: 150, damping: 25 }}
//       />

//       <motion.div
//         style={{
//           position: "absolute",
//           pointerEvents: "none",
//           top: cursorPos.y - 70,
//           left: cursorPos.x - 70,
//           width: "20px",
//           height: "20px",
//           backgroundColor: "#4caf50",
//           borderRadius: "50%",
//           zIndex: 9999,
//         }}
//         initial={{ x: -50, y: -50 }}
//         animate={{ x: cursorPos.x - 70, y: cursorPos.y - 70 }}
//         transition={{ type: "spring", stiffness: 200, damping: 30 }}
//       />
//     </div>
//   );
// };

// export default CursorFollow;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorFollow = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Update cursor position on mousemove
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    // Add mousemove event listener to update position
    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // Function to calculate position for the followers in a circular pattern
  const getCirclePosition = (angle: number, distance: number) => {
    const radian = (angle * Math.PI) / 180;
    const x = cursorPos.x + distance * Math.cos(radian);
    const y = cursorPos.y + distance * Math.sin(radian);
    return { x, y };
  };

  return (
    <div>
      {/* Main cursor element */}
      <motion.div
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: cursorPos.y - 15, // Adjust to the cursor size
          left: cursorPos.x - 15, // Adjust to the cursor size
          width: "30px",
          height: "30px",
          backgroundColor: "#ff6347", // Customize the color
          borderRadius: "50%",
          zIndex: 9999,
        }}
        initial={{ x: -50, y: -50 }}
        animate={{ x: cursorPos.x - 15, y: cursorPos.y - 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Circle of followers */}
      {[...Array(5)].map((_, index) => {
        const angle = (index / 5) * 360; // Distribute followers evenly
        const distance = 25 + index * 15; // Increase distance slightly for each follower
        const position = getCirclePosition(angle, distance);

        return (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              pointerEvents: "none",
              top: position.y - 15, // Adjust to the follower size
              left: position.x - 15, // Adjust to the follower size
              width: "20px",
              height: "20px",
              backgroundColor: index % 2 === 0 ? "#00bcd4" : "#4caf50",
              borderRadius: "50%",
              zIndex: 9999,
            }}
            initial={{ x: -50, y: -50 }}
            animate={{ x: position.x - 15, y: position.y - 15 }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
          />
        );
      })}
    </div>
  );
};

export default CursorFollow;
