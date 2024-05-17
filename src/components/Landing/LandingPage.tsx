import React from "react";
import Header from "../Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function LandingPage() {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <Header />
      <div
        className="flex items-center justify-center bg-cover bg-center h-screen"
        style={{
          backgroundImage: "url('./bgLanding.png')",
        }}
      >
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Room Details</CardTitle>
            <CardDescription>Join the interview room instantly</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="roomId">Room ID</Label>
                  <Input id="roomId" placeholder="ENTER ROOM ID" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="ENTER EMAIL ID" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="w-[120px]" variant="outline">
              Back
            </Button>
            <Button className="w-[120px] bg-blue-600">Join</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default LandingPage;
