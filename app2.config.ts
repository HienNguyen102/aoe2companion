// Experimental dark splash screen: https://expo.canny.io/feature-requests/p/dark-mode-splash-screen
const splash = {
    "image": "./app/assets/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffebc7",
    "dark": {
        "image": "./app/assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#181C29",
    },
};

const sentryConfigPlugin = [
    "@sentry/react-native/expo",
    {
        "url": "https://sentry.io/",
        "organization": "aoe2companion",
        "project": "aoe2companion",
    }
];

const version = '110.0.0';
const versionParts = version.split('.');

const runtimeVersion = versionParts[0] + '.' + versionParts[1] + '.0';

const runtimeVersionParts = runtimeVersion.split('.');
const runtimeVersionCode = runtimeVersionParts[0] + runtimeVersionParts[1].padStart(2, '0') + runtimeVersionParts[2].padStart(2, '0');

// console.log('Version: ' + version);
// console.log('Runtime version: ' + runtimeVersion);
// console.log('Runtime version code: ' + runtimeVersionCode);

const isProdBuild = process.env.EAS_BUILD_PROFILE?.includes('production');
const isRunningInEasCI = process.env.EAS_BUILD_RUNNER === 'eas-build';
const sentryConfigPlugins = [];

export default {
    "expo": {
        "name": "AoE II Companion",
        "description": "Track your AoE II Definitive Edition games. This app fetches information about your games so you are always up-to-date.",
        "slug": "dautien",
        "scheme": "aoe2companion",
        "owner": "hien102",
        "platforms": [
            "ios",
            "android",
            "web"
        ],
        "extra": {
            "website": "aoe2companion.com",
            "experienceId": "@denniske1001/aoe2companion",
            "eas": {
                "projectId": "fc431504-0a2f-4aa1-ba63-adae6c71c943"
            },
        },
        "userInterfaceStyle": "automatic",
        "jsEngine": "hermes",
        "runtimeVersion": runtimeVersion,
        "version": version,
        "orientation": "portrait",
        "privacy": "public",
        "githubUrl": "https://github.com/denniske/aoe2companion",
        "icon": "./app/assets/icon.png",
        "splash": splash,
        "updates": {
            "fallbackToCacheTimeout": 0,
            "url": "https://u.expo.dev/fc431504-0a2f-4aa1-ba63-adae6c71c943"
        },
        "assetBundlePatterns": [
            "node_modules/**",
            "app/assets/civilizations/**",
            "app/assets/data/**",
            "app/assets/font/**",
            "app/assets/legal/**",
            "app/assets/buildings/**",
            "app/assets/techs/**",
            "app/assets/units/**",
            "app/assets/tips/icon/**",
            "app/assets/tips/poster/**",
            "app/assets/translations/**",
            "app/assets/*"
        ],
        "plugins": [
            [
                "expo-router",
                {
                    "root": "./app/src/app",
                }
            ],
            [
                "expo-notifications",
                {
                    "icon": "./app/assets/notification.png"
                }
            ],
            // Needed since SDK 50. But it should not be needed because this is the default value.
            [
                "expo-av",
                {
                    "microphonePermission": "Allow $(PRODUCT_NAME) to access your microphone."
                }
            ],
            ...sentryConfigPlugins,
            [
                "expo-build-properties",
                {
                    "ios": {
                        "deploymentTarget": "13.4"
                    }
                }
            ],
            "expo-localization",
        ],
        "android": {
            "userInterfaceStyle": "automatic",
            "adaptiveIcon": {
                "foregroundImage": "./app/assets/icon-adaptive.png",
                "backgroundColor": "#fbebd3"
            },
            "package": "com.aoe2companion",
            "versionCode": runtimeVersionCode,
            "permissions": [],
            "googleServicesFile": "./google-services2.json",
            "splash": splash,
        },
        "ios": {
            "userInterfaceStyle": "automatic",
            "icon": "./app/assets/icon-adaptive-no-alpha.png",
            "bundleIdentifier": "vn.hac.aoe2companion",
            "buildNumber": runtimeVersion,
            "supportsTablet": false,
            "config": {
                "usesNonExemptEncryption": false
            },
            "infoPlist": {
                "LSApplicationQueriesSchemes": ["itms-apps"],
                "NSSupportsLiveActivities": true,
                "NSUserActivityTypes": ["BuildsConfigurationIntent"],
                "UIBackgroundModes": ["remote-notification"]
            },
            "splash": splash,
        },
    }
};
