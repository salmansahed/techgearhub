"use client";

import React, { useState, FormEvent } from "react";
import {
  Input,
  TextArea,
  Button,
  Select,
  Label,
  Description,
  ListBox,
  Separator,
  Card,
} from "@heroui/react";

// Product Form-এর জন্য TypeScript Interface
interface ProductFormData {
  title: string;
  price: string;
  categoryId: string;
  status: string;
  description: string;
}

export default function AddProductForm() {
  const [formData, setFormData] = useState<ProductFormData>({
    title: "",
    price: "",
    categoryId: "",
    status: "ACTIVE",
    description: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Submitting Product Data:", formData);

      // উদাহরণস্বরূপ রেসপন্স সিমুলেশন
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Product added successfully!");

      // Form Reset
      setFormData({
        title: "",
        price: "",
        categoryId: "",
        status: "ACTIVE",
        description: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl p-6 bg-content1 shadow-sm rounded-xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground">Add New Product</h2>
        <p className="text-sm text-default-500">
          Fill in the details below to add a new product or service to your
          database.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Title */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="title" className="text-sm font-medium">
            Product Title
          </Label>
          <Input
            id="title"
            placeholder="e.g. Modern Web Development Course"
            value={formData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>

        {/* Price & Status Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="price" className="text-sm font-medium">
              Price ($)
            </Label>
            <Input
              id="price"
              type="number"
              placeholder="99.99"
              value={formData.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, price: e.target.value })
              }
              required
            />
          </div>

          {/* Status Select */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="status" className="text-sm font-medium">
              Status
            </Label>
            <Select
              id="status"
              selectedKey={formData.status}
              onSelectionChange={(key) => {
                if (key) {
                  setFormData({ ...formData, status: String(key) });
                }
              }}
            >
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="ACTIVE">Active</ListBox.Item>
                  <ListBox.Item id="DRAFT">Draft</ListBox.Item>
                  <ListBox.Item id="INACTIVE">Inactive</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
        </div>

        {/* Category Select */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="category" className="text-sm font-medium">
            Category
          </Label>
          <Select
            id="category"
            selectedKey={formData.categoryId || null}
            onSelectionChange={(key) => {
              if (key) {
                setFormData({ ...formData, categoryId: String(key) });
              }
            }}
          >
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="cat-1">Web Development</ListBox.Item>
                <ListBox.Item id="cat-2">UI/UX Design</ListBox.Item>
                <ListBox.Item id="cat-3">Digital Marketing</ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
          <Description>
            Assigning a category helps in organized search filtering.
          </Description>
        </div>

        {/* Description TextArea */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="description" className="text-sm font-medium">
            Description
          </Label>
          <TextArea
            id="description"
            placeholder="Provide a detailed description of the product or service..."
            rows={4}
            value={formData.description}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <Separator className="my-2" />

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="secondary"
            isDisabled={loading}
            className="font-medium"
          >
            {loading ? "Saving..." : "Create Product"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
