import React from "react";

export default function ProfilePage({ params }: { params: { id: string } }) {

  return (
    <div>
      <h1>Profile {params.id}</h1>
      <a href="/login">Back</a>
    </div>
  );
}
