import {
  Body,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import React from "react";

const FirstTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome to our website</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Text className="text-4xl font-bold">Hello {name}.</Text>
          <Text>Welcome to our platform</Text>
          <Link href="http://localhost:3000/users">
            You are now one of our users
          </Link>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default FirstTemplate;
