import type { ProfileConfig } from "../types/profileConfig";
import jwMedia from "./jwMedia.json";
export const profileConfig: ProfileConfig = {
    avatar: jwMedia.avatar,
    name: jwMedia.profileName,
    bio: jwMedia.profileBio,
    links: [
        { name: "关于", icon: "material-symbols:person", url: "/about/", showName: false },
        { name: "RSS", icon: "fa7-solid:rss", url: "/rss.xml", showName: false },
    ],
};
