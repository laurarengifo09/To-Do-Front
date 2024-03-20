import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { AuthCard } from "../auth/components/AuthCard";
import { NavBar } from "../../components/NavBar";

export function Home() {

    return (
        <div className="grid grid-cols-6 min-h-screen bg-white ">
            <NavBar />  
        </div>

        );

}