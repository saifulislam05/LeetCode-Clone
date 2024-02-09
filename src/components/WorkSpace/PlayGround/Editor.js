import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { nordInit } from "@uiw/codemirror-theme-nord";
import { tags as t } from "@lezer/highlight";
import React, { useState, useEffect } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

const FONTSIZES = [12, 13, 14, 15, 16, 17, 18, 19, 20];

const Editor = ({ userCode, setUserCode }) => {
  
  const [EditorFontSize, setEditorFontSize] = useState(
    localStorage.getItem("EditorFontSize") || "14px"
  );
  const [SettingModal, setSettingModal] = useState(false); 
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    
    localStorage.setItem("EditorFontSize", EditorFontSize);
  }, [EditorFontSize]);

  const closeSettingModal = () => {
    setSettingModal(false);
  };

  const openSettingModal = () => {
    setSettingModal(true);
  };

  const handleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    const exitHandler=()=> {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
        return;
      }
      setIsFullScreen(true);
    }

    if (document.addEventListener) {
      document.addEventListener("fullscreenchange", exitHandler);
      document.addEventListener("webkitfullscreenchange", exitHandler);
      document.addEventListener("mozfullscreenchange", exitHandler);
      document.addEventListener("MSFullscreenChange", exitHandler);
    }
  }, [isFullScreen]);

  return (
    <div className="p-0.5 pt-0">
      <div className="flex flex-col h-full bg-neutral border-[.5px] border-[#dddddd6e] rounded-lg shadow-2xl overflow-hidden ">
        <div className="bg-base-200 w-full p-2 flex justify-between">
          <button className="ml-1 rounded-lg bg-neutral w-fit px-3 py-1.5 text-sm cursor-pointer select-none">
            Javascript
          </button>
          <div className="flex items-center mr-4 gap-4">
            <button
              onClick={openSettingModal}
              className="relative hover:scale-100"
            >
              <IoSettingsOutline />
            </button>

            <button
              className="relative hover:scale-100"
              onClick={handleFullScreen}
            >
              {!isFullScreen ? (
                <AiOutlineFullscreen />
              ) : (
                <AiOutlineFullscreenExit />
              )}
            </button>

            {SettingModal && (
              <div
                className="absolute left-0 top-0 w-[99vw] h-[99vh] m-auto bg-[#3f3f3f62] flex justify-center items-center z-50 cursor-pointer"
                onClick={closeSettingModal}
              >
                <div
                  className="bg-base-200 rounded-2xl w-11/12 sm:w-10/12 md:w-4/12"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Prevent modal close when clicking inside */}
                  <div className="flex items-center border-b px-5 py-4 text-lg font-semibold">
                    Settings
                    <button
                      onClick={closeSettingModal}
                      className="ml-auto cursor-pointer rounded transition-all"
                    >
                      <IoIosClose size={40} />
                    </button>
                  </div>
                  <div className="p-6 mb-10">
                    <div className="mt-6 flex justify-between items-center">
                      <div>
                        <h3 className="text-base font-medium">Font size</h3>
                        <h3 className="text-sm mt-1">
                          Choose your preferred font size for the code editor.
                        </h3>
                      </div>
                      <select
                        value={EditorFontSize}
                        onChange={(e) => setEditorFontSize(e.target.value)}
                        className="w-24 p-1 text-sm rounded-lg bg-neutral"
                      >
                        {FONTSIZES.map((fontSize, index) => {
                          return (
                            <option
                              key={index}
                              value={fontSize}
                            >{`${fontSize}px`}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-[inherit] h-full p-2 overflow-y-auto">
          <CodeMirror
            value={userCode}
            onChange={(value) => setUserCode(value)}
            theme={nordInit({
              settings: {
                caret: "#c6c6c6",
                fontFamily: "monospace",
                background: "#2a323c",
                foreground: "",
              },
              styles: [
                { tag: t.comment, color: "#ccc" },
                { tag: t.definition(t.typeName), color: "#194a7b" },
                { tag: t.typeName, color: "#194a7b" },
                { tag: t.tagName, color: "#008a02" },
                // Additional styling if needed
              ],
            })}
            extensions={[javascript()]}
            style={{ fontSize: `${EditorFontSize}px` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
