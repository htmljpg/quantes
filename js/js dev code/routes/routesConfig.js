import Modal from "../plugins/Modal";
import Lang from "../components/Lang";

import toggle from "../utils/toggle";

import CabinetHomePage from "../containers/Cabinet/CabinetHomePage";
import CabinetInvestPage from "../containers/Cabinet/CabinetInvestPage";
import CabinetSettingsPage from "../containers/Cabinet/CabinetSettingsPage/CabinetSettingsPage";
import SetYourPINCodePage from "../containers/Main/SetYourPINCodePage/SetYourPINCodePage";
import CodeSentToYourEmail from "../containers/Main/CodeSentToYourEmail/CodeSentToYourEmail";
import SignUpPage from "../containers/Main/SignUpPage";
import ForgotPasswordPage from "../containers/Main/ForgotPasswordPage";
import LogInPage from "../containers/Main/LogInPage";
import CabinetTokenPage from "../containers/Cabinet/CabinetTokenPage/CabinetTokenPage";
import CabinetWithdrawPage from "../containers/Cabinet/CabinetWithdrawPage/CabinetWithdrawPage";
import CabinetPartnershipDashboardPage from "../containers/Cabinet/CabinetPartnershipDashboardPage/CabinetPartnershipDashboardPage";
import CabinetTopUpCryptoPage from "../containers/Cabinet/CabinetTopUpCryptoPage/CabinetTopUpCryptoPage";

const routesConfig = [
    {
        pages: ['/log-in'],
        callback: LogInPage,
    },
    {
        pages: ['/sign-up'],
        callback: SignUpPage,
    },
    {
        pages: ['/forgot-password'],
        callback: ForgotPasswordPage,
    },
    {
        pages: ['/set-your-pin-code'],
        callback: SetYourPINCodePage,
    },
    {
        pages: ['/code-sent-to-your-email'],
        callback: CodeSentToYourEmail,
    },
    {
        pages: ['/cabinet-partnership-dashboard'],
        callback: CabinetPartnershipDashboardPage,
    },
    {
        pages: ['/cabinet'],
        callback: CabinetHomePage,
    },
    {
        pages: ['/cabinet-top-up-crypto', '/cabinet-top-up-crypto-2', '/cabinet-top-up-crypto-3', '/cabinet-top-up-crypto-4'],
        callback: CabinetTopUpCryptoPage,
    },
    {
        pages: ['/cabinet-withdraw'],
        callback: CabinetWithdrawPage,
    },
    {
        pages: ['/cabinet-token'],
        callback: CabinetTokenPage,
    },
    {
        pages: ['/cabinet-invest'],
        callback: CabinetInvestPage,
    },
    {
        pages: ['/cabinet-settings'],
        callback: CabinetSettingsPage,
    },
    {
        pages: ['*'],
        callback: Modal
    },
    {
        pages: ['*'],
        callback: Lang
    },
    {
        pages: ['*'],
        callback: toggle
    }
];

export default routesConfig;