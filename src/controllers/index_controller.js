const controller = {}

controller.index = (req, res) => {
    res.send(`
        <div style="
            font-size: 24px;
            color: white;
            background-color: black;
            font-family: 'Roboto', sans-serif;
            padding: 20px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50%;
            text-align: center;
            border-radius: 10px;
            animation: zoomAnimation 4s ease-in-out infinite alternate;
        ">
            La conexión ha sido correcta desde la ruta de index_controllers <br>
            <span style="color: green;">Elaborado por: <span style="font-family: 'Arial Black', sans-serif; animation: colorChange 4s ease-in-out infinite alternate;">Ricardo Rivadeneira</span></span>
        </div>
        
        <style>
            body {
                background-color: #e6e6e6;
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                min-height: 100vh;
                font-family: 'Roboto', sans-serif;
                color: #333;
            }

            @keyframes zoomAnimation {
                0% {
                    transform: translate(-50%, -50%) scale(1);
                }
                100% {
                    transform: translate(-50%, -50%) scale(1.1);
                }
            }
            @keyframes colorChange {
                0% {
                    color: blue;
                }
                100% {
                    color: red;
                }
            }
        </style>
    `)
}

module.exports = controller
