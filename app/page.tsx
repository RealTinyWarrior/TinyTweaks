import HomeLeftBoard from "@components/homeleftboard.tsx";
import StickyBar from "@components/stickybar.tsx";
import DisplayShow from "@components/displayshow.tsx";
import Navbar from "@components/navbar.tsx";
import { textArray } from "@data.ts";

let selectedText = textArray[Math.round(Math.random() * (textArray.length - 1))];

const Home = () => {
    return (
        <>
            <Navbar place="home" />
            <StickyBar place="home" />

            <div id="display-show">
                <DisplayShow text={selectedText} />

                <div id="home-content-box">
                    <div id="tcb-hold">
                        <div id="top-cont-board">
                            <HomeLeftBoard />

                            <div id="tcb-contentbox">
                                <div id="home-in2">
                                    <input type="text" />
                                </div>
                            </div>
                        </div>

                        <div id="home-in1">
                            <input type="text" />
                        </div>
                    </div>

                    <div id="home-recent"></div>
                </div>
                <p style={{ color: "black" }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur aspernatur labore vero iste,
                    laudantium id quis repudiandae modi? Accusantium facere ex perferendis nesciunt doloremque recusandae
                    assumenda aut dolores quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia beatae
                    inventore dolores dignissimos iusto cum, quos ea hic dolor, enim nisi sapiente nostrum quisquam similique iure
                    commodi. Ducimus, similique? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab est consequatur eos
                    culpa quos tenetur nostrum. Atque non nulla, excepturi dolore quo quisquam consequuntur, delectus inventore
                    provident quidem, accusantium eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam
                    porro dignissimos fugit accusantium at aliquam eius, rerum quia sed omnis eum necessitatibus ut maiores
                    maxime! Excepturi perspiciatis incidunt recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam sunt minus iure cumque ratione. Ipsa, aut nulla quis velit sequi culpa tempora unde, dignissimos
                    incidunt distinctio, dicta fuga sunt adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    error perferendis magni corrupti. Totam quidem dignissimos sequi ipsa corrupti maxime beatae, voluptates
                    accusantium quos magnam iste quibusdam blanditiis ratione magni? Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quibusdam, neque? Veniam, error rerum. Voluptatibus, autem ipsa ea magni commodi placeat
                    eligendi quod quibusdam quam nostrum consequatur quo, velit vitae sapiente. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Voluptatum omnis, modi eos nisi autem harum minus ex cumque sint libero, fugit
                    qui aliquam voluptatem non aut? Cumque doloribus molestias consequuntur? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Consectetur vero nam, culpa mollitia facilis quis unde amet, blanditiis
                    molestias distinctio quas, atque porro laudantium saepe. Dolorem perferendis pariatur deserunt mollitia!
                </p>
            </div>
        </>
    );
};

export default Home;
