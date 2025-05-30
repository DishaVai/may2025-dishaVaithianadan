import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import Image from "next/image";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
export default function cyoaPage() {
  return (
    <div>
      <div className="flex bg-purple-400 rounded-xl text-gray-300 shadow-md">
        <div className="flex">
          {/* logo */}
          <Image
            alt="sample logo"
            className="bg-purple-900 rounded-xl"
            height={25}
            src="/logo.png"
            width={100}
          />
        </div>
        <div>
          {/* title */}
          <Link
            className="text-4xl text-gray-300 flex my-7 mx-2 hover:text-gray-500"
            href={""}
          >
            Blake & Knee
          </Link>
        </div>
      </div>{" "}
      <br />
      <Navbar className="bg-purple-900 rounded-xl">
        <NavbarBrand />
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              className="text-gray-300 hover:text-gray-500"
              color="foreground"
              href="#"
            >
              Practice Areas
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              aria-current="page"
              className="text-gray-300 hover:text-gray-500"
              href="#"
            >
              Reviews
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-gray-300 hover:text-gray-500"
              color="foreground"
              href="#"
            >
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="secondary" href="#" variant="ghost">
              Log In
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="ghost">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>{" "}
      <br />
      <div className="justify-between flex bg-purple-900 text-white rounded-xl">
        <div className=" p-5">
          {/* fields of law */}
          <h1 className="text-xl">Field of Practice</h1>
          <p>We practice in some law fields no one knows</p>
        </div>
        <div className="justify-center bg-purple-400 rounded-xl">
          {/* cool image */}
          <Image
            alt="Law Photo (trust)"
            className="justify-center m-4 p-4"
            height={300}
            src="/volleyball.webp"
            width={300}
          />
        </div>
        <div className="p-5">
          {/* who we are */}
          <h1 className="text-xl">Who We Are</h1>
          <p>People</p>
        </div>
      </div>{" "}
      <br />
      <div className="bg-purple-400 text-white rounded-xl flex p-4">
        <h1 className="text-xl"> Statistics</h1> <br />
        <div className="justify-center p-4 m-4">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-4xl ">99%</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>
            <Divider />
            <CardFooter />
          </Card>
        </div>
      </div>
    </div>
  );
}
