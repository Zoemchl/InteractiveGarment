"use client";
import styles from "./documentation.component.module.css";

export default function DocumentationComponent({ onPieceClick }) {
    return (
        <div className={styles.componentDoc}>
            <section id="about">
                <h4>About</h4>

                <p className={styles.startp}>Fashion and technology have long seemed like two distinct worlds, yet their fusion holds the potential to change how we experience clothing. While wearable technology has made strides in sportswear and fitness gear, its presence in evening wear or everyday attire remains limited. With this project, we aim to bridge that gap, crafting a garment that seamlessly integrates technology into the fabric of modern fashion.</p><br/>

                <p>Our design features a jacket. The centerpiece of the garment, as displayed in the 3D model on the right side of the screen, lies in its kinetic mechanism. Each sleeve is equipped with three planes that react dynamically to the wearer's proximity to objects, surfaces, or even other people. The piece <button className={styles.riseButton} onClick={onPieceClick}>RISE</button> in an elegant motion, creating a visual effect that mirrors the idea of clothing as a living entity.</p><br/>

                <p>This interaction is made possible by ultrasound sensor for proximity and kinetic mechanisms, carefully embedded to remain invisible, ensuring the design retains its aesthetic. The result is a garment that feels as much like a piece of art as it does a piece of cutting-edge technology.</p><br/>

                <p>Our mission is to challenge the conventional boundaries of fashion by exploring various territory, combining technology with garments that are not just functional, but captivating, expressive, and futuristic. Through this project, we hope to inspire a new vision for the future of interactive clothing, making technology an integral, beautiful part of the everyday wardrobe.</p><br/>
            </section>
            
            <section id="timeline">
                <h4>Timeline</h4>
                <p className={styles.timeline}>
                Septembre - Début octobre : Recherches, inspiration<br />
                Octobre - 20 octobre : Tests prototypes modules + design artistique et technique<br />
                20 octobre - 15 novembre : matières premières + prototypage<br />
                15 novembre - décembre : réalisation<br />
                Décembre - janvier : corrections, supports, préparation expo
                </p><br/>
            </section>
            
            <section id="team">
            <h4>Team</h4>
                <div>
                <h6>Auriane Le Perdriel</h6>
                <p>A5 Creative Technology / <a href="mailto:auriane.le_perdriel@edu.devinci.fr">auriane.le_perdriel@edu.devinci.fr</a></p>

                <h6>Zoé Michel</h6>
                <p>A5 Creative Technology / <a href="mailto:zoe.michel@edu.devinci.fr">zoe.michel@edu.devinci.fr</a></p>

                <h6>Clément Gardair</h6>
                <p>A4 Creative Technology / <a href="mailto:clement.gardair@edu.devinci.fr">clement.gardair@edu.devinci.fr</a></p>
                </div>
            </section>
        </div>
    );
}
