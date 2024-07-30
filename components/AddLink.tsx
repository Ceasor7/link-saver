"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const AddLink = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Add link</CardTitle>
        </CardHeader>
        <CardContent className="cursor-pointer" onClick={openModal}>
          <div className="flex justify-center items-center">
            <Plus size={48} />
          </div>
        </CardContent>
      </Card>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Add Link Details</h2>
            <form>
              <div>
                <Label htmlFor="link category">Link Category</Label>
                <Input type="text" placeholder="Enter Link Category" />
              </div>
              <div>
                <Label htmlFor="lik url">Link URL</Label>
                <Input type="text" placeholder="Enter Link URL" />
              </div>
              <div>
                <Label htmlFor="project name">Project Name</Label>
                <Input type="text" placeholder="Enter Project Name" />
              </div>
              <div className=" flex justify-center items-center text-center">
                <Button
                  variant="outline"
                  className=" w-40 bg-[#E5320C] text-white"
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddLink;
