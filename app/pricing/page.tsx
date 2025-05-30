"use client";
import { Select, SelectItem } from "@heroui/select";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { Snippet } from "@heroui/snippet";

import { title } from "@/components/primitives";
export const cities = [
  { key: "brisbane", label: "Brisbane" },
  { key: "sydney", label: "Sydney" },
  { key: "canberra", label: "Canberra" },
];

export const chickens = [
  { key: "egg", label: "Egg" },
  { key: "chicken", label: "Chicken" },
];
export const sports = [
  { key: "tennis", label: "Tennis" },
  { key: "golf", label: "Golf" },
];
export const pineapples = [
  { key: "pineapple", label: "goes on pizza." },
  { key: "nopineapple", label: "does not go on pizza." },
];
export const seasons = [
  { key: "winter", label: "Winter" },
  { key: "spring", label: "Spring" },
  { key: "summer", label: "Summer" },
  { key: "autumn", label: "Autumn" },
];
export default function QuizPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const sizes = ["sm", "md", "lg"];

  return (
    <div>
      <h1 className={title()}>Pop Quiz</h1> <br /> <br />
      <p>What is the capital of Australia?</p>
      <Select isRequired className="max-w-xs" label="Select a city" size={"sm"}>
        {cities.map((city) => (
          <SelectItem key={city.key}>{city.label}</SelectItem>
        ))}
      </Select>{" "}
      <br /> <br />
      <p>Which came first, the chicken or the egg?</p>
      <Select
        isRequired
        className="max-w-xs"
        label="Select an option"
        size={"sm"}
      >
        {chickens.map((chicken) => (
          <SelectItem key={chicken.key}>{chicken.label}</SelectItem>
        ))}
      </Select>{" "}
      <br /> <br />
      <p>
        Which sport was voted as better by period five of Web Design? Tennis or
        golf?
      </p>
      <Select
        isRequired
        className="max-w-xs"
        label="Select a sport"
        size={"sm"}
      >
        {sports.map((sport) => (
          <SelectItem key={sport.key}>{sport.label}</SelectItem>
        ))}
      </Select>{" "}
      <br /> <br />
      <p>According to the majority of period five web design, pinneapple...</p>
      <Select
        isRequired
        className="max-w-xs"
        label="Select an option"
        size={"sm"}
      >
        {pineapples.map((pineapple) => (
          <SelectItem key={pineapple.key}>{pineapple.label}</SelectItem>
        ))}
      </Select>{" "}
      <br /> <br />
      <p>
        According to the majority of period five web design, which is the best
        season?
      </p>
      <Select
        isRequired
        className="max-w-xs"
        label="Select a season"
        size={"sm"}
      >
        {seasons.map((season) => (
          <SelectItem key={season.key}>{season.label}</SelectItem>
        ))}
      </Select>{" "}
      <br /> <br />
      <Button onPress={onOpen}>Answer Key</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Answer Key
              </ModalHeader>
              <ModalBody>
                <ol>
                  <li>1. Canberra</li>
                  <li>2. Egg</li>
                  <li>3. Tennis</li>
                  <li>4. Goes on pizza</li>
                  <li>5. Summer</li>
                </ol>
                <p className="2-xl">
                  Copy and paste your result to send to your peers!
                </p>
                <Snippet>I got 0%!</Snippet>
                <Snippet>I got 20%!</Snippet>
                <Snippet>I got 40%!</Snippet>
                <Snippet>I got 60%!</Snippet>
                <Snippet>I got 80%!</Snippet>
                <Snippet>I got 100%!</Snippet>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
