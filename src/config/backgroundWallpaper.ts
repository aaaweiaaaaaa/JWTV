import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";
import jwMedia from "./jwMedia.json";
export const backgroundWallpaper: BackgroundWallpaperConfig = {
    mode: "banner",
    playerEnable: false,
    src: { desktop: jwMedia.bannerDesktop, mobile: jwMedia.bannerMobile },
    common: {
        dimOpacity: 0.2,
        homeText: {
            enable: true,
            title: "JW的播客整理",
            titleSize: "clamp(2rem, 5vw, 4.5rem)",
            subtitle: ["听见观点，留下思考。", "在商业、科技与人物的长谈之间。"],
            subtitleSize: "clamp(1rem, 2vw, 1.5rem)",
            typewriter: { enable: true, speed: 100, deleteSpeed: 50, pauseTime: 2800 },
            linksEnable: false,
        },
        carousel: { enable: false },
        waves: { enable: { desktop: true, mobile: true } },
        gradient: { enable: { desktop: true, mobile: true }, height: "10%" },
    },
    banner: {
        position: "center",
        postInfo: { mode: "description" },
        navbar: { transparentMode: "semi", blur: 5 },
    },
};
