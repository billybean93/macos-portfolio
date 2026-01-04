import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window";

const Gallery = () => {
    const { windows } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <h2>Gallery</h2>
            </div>

            <div className="bg-gray-100 h-full flex">
                {/* Sidebar with categories */}
                <div className="w-48 bg-gray-200 border-r border-gray-300 p-3">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Library</h3>
                    <ul className="space-y-1">
                        {photosLinks.map((link) => (
                            <li
                                key={link.id}
                                className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-300 cursor-pointer text-sm"
                            >
                                <img src={link.icon} alt={link.title} className="w-4 h-4" />
                                <span>{link.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main gallery grid */}
                <div className="flex-1 p-4 overflow-auto">
                    <div className="grid grid-cols-3 gap-4">
                        {gallery.map((item) => (
                            <div
                                key={item.id}
                                className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <img
                                    src={item.img}
                                    alt={`Gallery image ${item.id}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");
export default GalleryWindow;

