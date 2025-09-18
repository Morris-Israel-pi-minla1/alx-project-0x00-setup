import Card from "@/components/Card";
import Button from "@/components/Button";
import React from "react";

const Landing = () => {
    return (
        <div>
            <h1 className="text-4xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Button title="Book Now" size="small" shape="rounded-sm" styles="bg-blue-300 text-white"/>
            <br />
            <Button title="Book Now" size="medium" shape="rounded-md" styles="bg-blue-400 text-white"/>
            <br />
            <Button title="Book Now" size="large" shape="rounded-full" styles="bg-blue-500 text-white"/>
            <br />
            <Button title="Book Now" size="large" shape="rounded-lg" styles="bg-blue-500 text-white"/>
        </div>)
}

export default Landing;