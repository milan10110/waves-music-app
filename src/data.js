import { v4 as uuidv4 } from "uuid";

const chillhop = () => {
    return [
        {
            name: "Green Valley Trail",
            cover: "https://i.scdn.co/image/ab67616d0000b2731ff35f02b13346a07cc44228",
            artist: "Ruck P",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=41930",
            color: ["#171717", "#FAC21F"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Highland Park After Dark",
            cover: "https://i.scdn.co/image/ab67616d0000b273f95667a0d5b275728dc8bfe1",
            artist: "Teddy Roxpin",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=41931",
            color: ["#582D27", "#213029"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Night Owl",
            cover: "https://i.scdn.co/image/ab67616d0000b27344c53b2c3a1457e1498ce55e",
            artist: "brillion.",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=35641",
            color: ["#583D5E", "#5F40BE"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "In Minutes",
            cover: "https://i.scdn.co/image/ab67616d0000b27382649b5b0d2af7f4e506d3a6",
            artist: "Shrimpnose",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=41689",
            color: ["#F8EADD", "#F4E2D4"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Home",
            cover: "https://i.scdn.co/image/ab67616d0000b273d18c38b021d7cce693e47903",
            artist: "Idealism, SwuM",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=43679",
            color: ["#141A30", "#EEEDC1"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "A Reminder",
            cover: "https://i.scdn.co/image/ab67616d0000b27326b04e87d8297b1b507c2cd8",
            artist: "Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
            color: ["#FDAD23", "#F44C07"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Zero Point",
            cover: "https://i.scdn.co/image/ab67616d0000b27310f5d62cf4a7a3ea75e95f28",
            artist: "dryhope",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=41880",
            color: ["#57645A", "#4E6964"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Find Yourself",
            cover: "https://i.scdn.co/image/ab67616d0000b27365390185a80cc80ec325d4cb",
            artist: "Blue Wednesday",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=41879",
            color: ["#54482B", "#E8CC4F"],
            id: uuidv4(),
            active: false,
        },
    ]
};

export default chillhop;