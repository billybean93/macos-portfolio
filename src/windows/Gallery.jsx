import { useState, useEffect, useCallback } from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
    const { windows } = useWindowStore();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (!isViewerOpen) return;

        switch (e.key) {
            case "ArrowLeft":
                navigateImage("prev");
                break;
            case "ArrowRight":
                navigateImage("next");
                break;
            case "Escape":
                closeViewer();
                break;
            default:
                break;
        }
    }, [isViewerOpen, selectedIndex]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    const openImage = (index) => {
        setSelectedIndex(index);
        setIsViewerOpen(true);
    };

    const closeViewer = () => {
        setIsViewerOpen(false);
        setSelectedIndex(null);
    };

    const navigateImage = (direction) => {
        if (direction === "prev") {
            setSelectedIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
        } else {
            setSelectedIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
        }
    };

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
                        {gallery.map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => openImage(index)}
                                className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <img
                                    src={item.img}
                                    alt={`Gallery image ${item.id}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Full-screen Image Viewer Modal */}
            {isViewerOpen && selectedIndex !== null && (
                <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center">
                    {/* Close button */}
                    <button
                        onClick={closeViewer}
                        className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Left navigation arrow */}
                    <button
                        onClick={() => navigateImage("prev")}
                        className="absolute left-4 text-white hover:bg-white/20 rounded-full p-3 transition-colors"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    {/* Right navigation arrow */}
                    <button
                        onClick={() => navigateImage("next")}
                        className="absolute right-4 text-white hover:bg-white/20 rounded-full p-3 transition-colors"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
                        {selectedIndex + 1} of {gallery.length}
                    </div>

                    {/* Main image */}
                    <div className="max-w-[90vw] max-h-[85vh] flex items-center justify-center">
                        <img
                            src={gallery[selectedIndex].img}
                            alt={`Image ${selectedIndex + 1}`}
                            className="max-w-full max-h-[85vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");
export default GalleryWindow;

