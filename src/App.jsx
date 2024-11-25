import './App.css'
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button textLabel="to the collection"/>
                <Button textLabel="shop all bags"/>
                <Button textLabel="pre-orders" disabled/>
            </nav>
            <main>
                <Product label="Best seller" image={bag_1} imageAlt="Image of first bag" nameOfBag={"The handy bag"}
                         price={"400"}/>
                <Product label="Best seller" image={bag_2} imageAlt="Image of second bag" nameOfBag={"The stylish bag"}
                         price={"250"}/>
                <Product label="New collection" image={bag_3} imageAlt="Image of third bag" nameOfBag={"The simple bag"}
                         price={"300"}/>
                <Product label="New collection" image={bag_4} imageAlt="Image of fourth bag"
                         nameOfBag={"The trendy bag"} price={"150"}/>
            </main>
            <footer>
                <Tile title="THE BRAND">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur blanditiis dolor
                        earum et facere, fuga ipsam iure laborum magni maiores nostrum ratione ut veniam vero. Dolorem
                        eius magnam nemo.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi architecto
                        atque consectetur cumque dolores eveniet facilis iste natus nemo nobis, nulla odio possimus quia
                        sapiente totam voluptas, voluptatem.</p>
                </Tile>
                <Tile image={brand} Alt="brand"/>
                <Tile image={our_story} Alt="our_story"/>
                <Tile title="Our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid maiores non perferendis
                        saepe voluptas voluptatum. Eaque fuga ipsum iste, iusto magni, necessitatibus numquam odio omnis
                        quia sapiente totam ullam.</p>
                </Tile>
                <Tile>
                    <p>And one last Tile to finish it off.</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
