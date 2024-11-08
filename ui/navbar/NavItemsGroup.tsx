"use client";

import { Button, Stack, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";

const navItemsData = [
  {
    name: "Department",
    route: "/department",
  },
  {
    name: "Alumni",
    route: "/alumni",
  },
  {
    name: "Events",
    route: "/events",
  },
  {
    name: "Resources",
    route: "/resources",
  },
  {
    name: "Magazines",
    route: "/magazines",
  },
];

export default function NavItemsGroup() {
  const [isMobile] = useMediaQuery(["(max-width: 900px)"], {
    fallback: [false], // Providing a fallback can prevent this error
  });

  return (
    <Stack direction={isMobile ? "column" : "row"}>
      {navItemsData.map((item, index) => (
        <Link href={item.route} key={index}>
          <Button
            variant="ghost"
            _hover={{ background: "blue.100" }}
            colorScheme="blue"
            color="black"
            fontWeight={600}
            size={"xl"}
          >
            {item.name}
          </Button>
        </Link>
      ))}
    </Stack>
  );
}
