import React from "react";


export default async function ListEmployees() {

  return (
    <div className="justify-center items-center flex flex-col h-screen">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance justify-center">
        Welcome to the Employee Management System
      </h1>
      <small className="text-center text-muted-foreground mt-2 text-3xl">
        Select an option from the sidebar to get started.
      </small>
    </div>
  );
}
