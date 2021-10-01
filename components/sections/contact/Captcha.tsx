import React, { useEffect, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface CaptchaProps {
  updateToken: React.Dispatch<React.SetStateAction<string | null>>;
  shouldReset: boolean;
  updateReset: React.Dispatch<React.SetStateAction<boolean>>;
}

const Captcha = ({ updateToken, shouldReset, updateReset }: CaptchaProps): JSX.Element => {
  const captchaRef = useRef<HCaptcha>(null);

  const onExpire = () => {
    console.log("hCaptcha Token Expired");
    updateToken(null);
  };

  const onError = (err: unknown) => {
    console.log(`hCaptcha Error: ${err}`);
  };

  useEffect(() => {
    if (shouldReset) {
      updateReset(false);
      captchaRef.current?.resetCaptcha();
    }
  }, [shouldReset, updateReset])

  return (
    <HCaptcha
      sitekey={
        process.env.NEXT_PUBLIC_HCAPTCHA_KEY
          ? process.env.NEXT_PUBLIC_HCAPTCHA_KEY
          : ""
      }
      onVerify={updateToken}
      onError={onError}
      onExpire={onExpire}
      theme="dark"
      size="normal"
      ref={captchaRef}
      reCaptchaCompat={false}
    />
  );
};

export default Captcha;
