import {
    createOnyxiaUi,
    defaultPalette,
    defaultGetTypographyDesc,
} from "onyxia-ui";
import "onyxia-ui/assets/fonts/WorkSans/font.css";
import "onyxia-ui/assets/fonts/Marianne/font.css";

const { OnyxiaUi, ofTypeTheme } = createOnyxiaUi({
    "BASE_URL": import.meta.env.BASE_URL,
    "getTypographyDesc": params => {
        const typographyDesc = defaultGetTypographyDesc(params);

        return {
            ...typographyDesc,
            "fontFamily": '"Work Sans", sans-serif',
        };
    },
    "palette": {
        ...defaultPalette,
        // Your custom color
    },
});

export { OnyxiaUi };

export type Theme = typeof ofTypeTheme;

