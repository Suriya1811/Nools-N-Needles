import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import type { Product, InsertProduct, Category, InsertCategory } from "@shared/schema";
import { Plus, Trash2, Edit2, LogOut } from "lucide-react";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const token = localStorage.getItem("admin-token");

  // If no token, redirect to login
  if (!token) {
    setLocation("/admin");
    return null;
  }

  const { data: products = [], isLoading: isLoadingProducts } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: categories = [], isLoading: isLoadingCategories } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const [newCategoryName, setNewCategoryName] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<Product>>({
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "single"
  });

  const createMutation = useMutation({
    mutationFn: async (product: InsertProduct) => {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(product)
      });
      if (!res.ok) throw new Error("Failed to create product");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast({ title: "Success", description: "Product created" });
      resetForm();
    },
    onError: () => {
      toast({ title: "Error", description: "Could not create product", variant: "destructive" });
    }
  });

  const updateMutation = useMutation({
    mutationFn: async (product: Partial<Product>) => {
      const res = await fetch(`/api/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(product)
      });
      if (!res.ok) throw new Error("Failed to update product");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast({ title: "Success", description: "Product updated" });
      resetForm();
    },
    onError: () => {
      toast({ title: "Error", description: "Could not update product", variant: "destructive" });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Failed to delete product");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast({ title: "Success", description: "Product deleted" });
    },
    onError: () => {
      toast({ title: "Error", description: "Could not delete product", variant: "destructive" });
    }
  });

  const createCategoryMutation = useMutation({
    mutationFn: async (category: InsertCategory) => {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
      });
      if (!res.ok) throw new Error("Failed to create category");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/categories"] });
      toast({ title: "Success", description: "Category created" });
      setNewCategoryName("");
    },
    onError: () => {
      toast({ title: "Error", description: "Could not create category", variant: "destructive" });
    }
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/categories/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Failed to delete category");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/categories"] });
      toast({ title: "Success", description: "Category deleted" });
    },
    onError: () => {
      toast({ title: "Error", description: "Could not delete category", variant: "destructive" });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...currentProduct,
      price: Number(currentProduct.price)
    } as InsertProduct;

    if (isEditing && currentProduct.id) {
      updateMutation.mutate({ ...payload, id: currentProduct.id });
    } else {
      createMutation.mutate(payload);
    }
  };

  const handleEdit = (product: Product) => {
    setIsEditing(true);
    setCurrentProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentProduct({ name: "", description: "", price: 0, image: "", category: "single" });
  };

  const handleLogout = () => {
    localStorage.removeItem("admin-token");
    setLocation("/admin");
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategoryName.trim()) {
      createCategoryMutation.mutate({ name: newCategoryName.trim() });
    }
  };

  if (isLoadingProducts || isLoadingCategories) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif text-primary">Admin Dashboard</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-600">
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="bg-card border p-4 sm:p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-medium mb-4">Manage Categories</h2>
        <form onSubmit={handleAddCategory} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
          <input 
            type="text" 
            placeholder="New Category Name" 
            className="flex-1 p-2 border rounded bg-transparent" 
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <button 
            type="submit" 
            disabled={createCategoryMutation.isPending || !newCategoryName.trim()} 
            className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 flex justify-center items-center gap-2 disabled:opacity-50"
          >
            <Plus size={18} /> Add Category
          </button>
        </form>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <div key={c.id} className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full text-sm">
              <span>{c.name}</span>
              <button 
                type="button"
                onClick={() => { if(confirm("Delete this category?")) deleteCategoryMutation.mutate(c.id) }} 
                className="text-muted-foreground hover:text-red-500 transition-colors"
                title="Delete Category"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
          {categories.length === 0 && (
            <p className="text-sm text-muted-foreground">No categories found.</p>
          )}
        </div>
      </div>

      <div className="bg-card border p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-medium mb-4">{isEditing ? "Edit Product" : "Add New Product"}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input required type="text" className="w-full p-2 border rounded bg-transparent" 
              value={currentProduct.name} onChange={(e) => setCurrentProduct({...currentProduct, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select className="w-full p-2 border rounded bg-transparent" 
              value={currentProduct.category} onChange={(e) => setCurrentProduct({...currentProduct, category: e.target.value})}>
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Price (₹)</label>
            <input required type="number" className="w-full p-2 border rounded bg-transparent" 
              value={currentProduct.price} onChange={(e) => setCurrentProduct({...currentProduct, price: parseInt(e.target.value) || 0})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Image Upload</label>
            <input 
              type="file" 
              accept="image/*"
              className="w-full p-2 border rounded bg-transparent" 
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setCurrentProduct({...currentProduct, image: reader.result as string});
                  };
                  reader.readAsDataURL(file);
                }
              }} 
            />
            {currentProduct.image && (
              <img src={currentProduct.image} alt="Preview" className="mt-2 h-16 w-16 object-cover rounded border" />
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea required className="w-full p-2 border rounded bg-transparent" rows={3}
              value={currentProduct.description} onChange={(e) => setCurrentProduct({...currentProduct, description: e.target.value})} />
          </div>
          <div className="md:col-span-2 flex gap-4">
            <button type="submit" disabled={createMutation.isPending || updateMutation.isPending} 
              className="flex-1 bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 flex items-center justify-center gap-2">
              <Plus size={18} /> {isEditing ? "Update Product" : "Add Product"}
            </button>
            {isEditing && (
              <button type="button" onClick={resetForm} className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-card border rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="p-3 border-b">Image</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Category</th>
              <th className="p-3 border-b">Price</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b hover:bg-muted/50">
                <td className="p-3">
                  <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                </td>
                <td className="p-3 font-medium">{product.name}</td>
                <td className="p-3 capitalize">{product.category}</td>
                <td className="p-3">₹{product.price}</td>
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <button onClick={() => handleEdit(product)} className="text-blue-500 hover:text-blue-700">
                      <Edit2 size={18} />
                    </button>
                    <button onClick={() => { if(confirm("Are you sure?")) deleteMutation.mutate(product.id) }} className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-muted-foreground">No products found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
