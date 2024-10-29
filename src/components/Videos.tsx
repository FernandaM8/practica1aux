export default function Videos() {
    return (
        <div className="video-component">
            <h2>OST OFICIAL</h2>
            <div>
                <video width="640" height="360" controls>
                    <source src="./Lyn_LoveStory.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}