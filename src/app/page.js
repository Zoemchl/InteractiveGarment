"use client";

import { useState } from "react";
import NavbarComponent from "./components/Navbar";
import DocumentationComponent from "./components/Documentation";
import ThreeScene from "./components/ThreeSide";
import styles from "./page.module.css";

export default function Home() {
  const [rotatePieces, setRotatePieces] = useState(false);

  const handlePieceClick = () => {
    setRotatePieces(!rotatePieces);
  };

  return (
    <div className={styles.page}>
      <h1>INTERACTIVE GARMENT</h1>
      <NavbarComponent />
      <main className={styles.main}>
        <DocumentationComponent onPieceClick={handlePieceClick} />
        <ThreeScene
          className={styles.three}
          modelPath={"./InteractiveGarmentV1_Blender.glb"}
          rotatePieces={rotatePieces}
        />
      </main>
    </div>
  );
}
