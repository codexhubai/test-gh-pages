import { motion } from "framer-motion";
import DanceForm from "@/components/dance/DanceForm";
import Layout from "@/components/layout/Layout";

const AddDance = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-3xl font-bold mb-2">Add New Dance</h1>
          <p className="text-muted-foreground mb-8">
            Contribute to the Dance Wiki by adding a new dance style
          </p>
          
          <div className="bg-card border rounded-lg p-6">
            <DanceForm />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AddDance;