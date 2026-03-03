import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center bg-background">
      <SignUp
        // https://clerk.com/docs/nextjs/guides/customizing-clerk/appearance-prop/bring-your-own-css#use-custom-css-classes
        appearance={{
          elements: {
            rootBox: "max-auto",
            card: "shadow-lg",
          },
        }}
      />
    </div>
  );
}
