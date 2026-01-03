import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if(!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
        <div id="window-header">
            <WindowControls target='imgfile'/>
            <h2>{name}</h2>
        </div>

        <div className="p-5 bg-white flex items-center justify-center min-h-[400px]">
            {imageUrl ? (
                <div className="w-full flex items-center justify-center">
                    <img 
                        src={imageUrl} 
                        alt={name} 
                        className="max-w-full max-h-[600px] h-auto object-contain rounded" 
                    />
                </div>
            ) : (
                <p className="text-gray-400">No image to display</p>
            )}
        </div>
        </>
    )
}

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;