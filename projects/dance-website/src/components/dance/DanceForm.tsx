import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { addDance } from "@/lib/data/dances";

// Form schema
const danceFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  origin: z.string().min(2, { message: "Origin must be at least 2 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  history: z.string().min(20, { message: "History must be at least 20 characters." }),
  imageUrl: z.string().url({ message: "Must be a valid URL." }).optional().or(z.literal("")),
  videoUrl: z.string().url({ message: "Must be a valid URL." }).optional().or(z.literal("")),
  tags: z.string()
});

const DanceForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof danceFormSchema>>({
    resolver: zodResolver(danceFormSchema),
    defaultValues: {
      name: "",
      origin: "",
      description: "",
      history: "",
      imageUrl: "",
      videoUrl: "",
      tags: ""
    }
  });

  const onSubmit = async (data: z.infer<typeof danceFormSchema>) => {
    try {
      setIsSubmitting(true);
      
      // Convert comma-separated tags to array
      const tagsArray = data.tags
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);
        
      const newDance = addDance({
        name: data.name,
        origin: data.origin,
        description: data.description,
        history: data.history,
        imageUrl: data.imageUrl || undefined,
        videoUrl: data.videoUrl || undefined,
        tags: tagsArray
      });
      
      toast.success("Dance added successfully!");
      navigate(`/dances/${newDance.id}`);
    } catch (error) {
      toast.error("Failed to add dance. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dance Name</FormLabel>
              <FormControl>
                <Input placeholder="Ballet, Salsa, Hip Hop, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="origin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Origin/Country</FormLabel>
              <FormControl>
                <Input placeholder="Italy, Cuba, India, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="A brief description of the dance style..." 
                  className="resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="history"
          render={({ field }) => (
            <FormItem>
              <FormLabel>History</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Provide some historical context about this dance form..." 
                  className="min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/image.jpg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="videoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video URL (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://youtube.com/watch?v=..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags (comma-separated)</FormLabel>
              <FormControl>
                <Input placeholder="classical, partner, traditional, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end space-x-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate("/dances")}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding..." : "Add Dance"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default DanceForm;