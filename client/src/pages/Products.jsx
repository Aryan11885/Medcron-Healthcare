// import React, { useState } from "react";
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.jpg";
// import img5 from "../assets/img5.jpg";
// import img6 from "../assets/img6.jpg";

// import img8 from "../assets/img8.jpg";
// import img9 from "../assets/img9.jpg";
// import img10 from "../assets/img10.jpg";
// import img11 from "../assets/img11.jpg";
// import img12 from "../assets/img12.jpg";
// import img13 from "../assets/img13.jpg";
// import img14 from "../assets/img14.jpg";
// import img15 from "../assets/img15.jpg";

// const products = [
//   {
//     id: 1,
//     name: "Paracetamol 500mg",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹35",
//     company: "Medcron Healthcare",
//     description: "Effective pain and fever relief tablets suitable for all age groups.",
//     image: img1,
//   },
//   {
//     id: 2,
//     name: "Amoxicillin Capsules",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹120",
//     company: "Medcron Healthcare",
//     description: "Broad-spectrum antibiotic for bacterial infections.",
//     image: img2,
//   },
//   {
//     id: 3,
//     name: "Paracetamol 500mg",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹35",
//     company: "Medcron Healthcare",
//     description: "Effective pain and fever relief tablets suitable for all age groups.",
//     image: img3,
//   },
//   {
//     id: 4,
//     name: "Paracetamol 500mg",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹35",
//     company: "Medcron Healthcare",
//     description: "Effective pain and fever relief tablets suitable for all age groups.",
//     image: img4,
//   },
//   {
//     id: 5,
//     name: "Paracetamol 500mg",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹35",
//     company: "Medcron Healthcare",
//     description: "Effective pain and fever relief tablets suitable for all age groups.",
//     image: img5,
//   },
//   {
//     id: 6,
//     name: "Paracetamol 500mg",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹35",
//     company: "Medcron Healthcare",
//     description: "Effective pain and fever relief tablets suitable for all age groups.",
//     image: img6,
//   },

//   {
//     id: 8,
//     name: "Paracetamol 500mg",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹35",
//     company: "Medcron Healthcare",
//     description: "Effective pain and fever relief tablets suitable for all age groups.",
//     image: img8,
//   },
//   {
//     id: 9,
//     name: "Paracetamol 500mg",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹35",
//     company: "Medcron Healthcare",
//     description: "Effective pain and fever relief tablets suitable for all age groups.",
//     image: img9,
//   },
//   {
//     id: 10,
//     name: "Paracetamol 500mg",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹35",
//     company: "Medcron Healthcare",
//     description: "Effective pain and fever relief tablets suitable for all age groups.",
//     image: img10,
//   },
//   {
//     id: 11,
//     name: "Paracetamol 500mg",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹35",
//     company: "Medcron Healthcare",
//     description: "Effective pain and fever relief tablets suitable for all age groups.",
//     image: img11,
//   },
//   {
//     id: 12,
//     name: "Paracetamol 500mg",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹35",
//     company: "Medcron Healthcare",
//     description: "Effective pain and fever relief tablets suitable for all age groups.",
//     image: img12,
//   },
//   {
//     id: 13,
//     name: "Paracetamol 500mg",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹35",
//     company: "Medcron Healthcare",
//     description: "Effective pain and fever relief tablets suitable for all age groups.",
//     image: img13,
//   },
//   {
//     id: 14,
//     name: "Paracetamol 500mg",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹35",
//     company: "Medcron Healthcare",
//     description: "Effective pain and fever relief tablets suitable for all age groups.",
//     image: img14,
//   },
//   {
//     id: 15,
//     name: "Paracetamol 500mg",
//     ingredient: "Betamexathonasalva and dexomethasone",
//     price: "₹35",
//     company: "Medcron Healthcare",
//     description: "Effective pain and fever relief tablets suitable for all age groups.",
//     image: img15,
//   },

//   // ... add remaining 18 products similarly
// ];

// export default function ProductPage() {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Function to scroll to QuerySection
//   const handleBuyNow = () => {
//     const querySection = document.getElementById("query-section");
//     if (querySection) {
//       querySection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen py-12 px-6 md:px-10">
//       {/* Page Header */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
//           Our Products
//         </h1>
//         <p className="text-gray-500 mt-2">
//           Explore our range of healthcare products trusted by professionals
//         </p>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             onClick={() => setSelectedProduct(product)}
//             className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-3 flex flex-col items-center text-center cursor-pointer"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-54 h-42 object-cover rounded-lg mb-3"
//             />
//             <h3 className="text-sm font-semibold text-gray-800">
//               {product.name}
//             </h3>

//             <div className="flex gap-2 mt-3">
//               <button
//                 onClick={() => setSelectedProduct(product)}
//                 className="bg-slate-800 text-white text-xs px-3 py-1.5 rounded-full hover:bg-slate-700 transition-all"
//               >
//                 View Details
//               </button>
//               <button
//                 onClick={handleBuyNow}
//                 className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full hover:bg-blue-500 transition-all"
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal Popup */}
//       {selectedProduct && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
//           <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedProduct(null)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
//             >
//               ✖
//             </button>

//             {/* Product Details */}
//             <img
//               src={selectedProduct.image}
//               alt={selectedProduct.name}
//               className="w-72 h-58 object-cover rounded-lg mx-auto mb-4"
//             />
//             <h2 className="text-lg font-semibold text-slate-800 mb-1">
//               {selectedProduct.name}
//               {selectedProduct.ingredient && (
//                 <span className="block text-sm text-gray-500 mt-1">
//                   {selectedProduct.ingredient}
//                 </span>
//               )}
//             </h2>
//             <p className="text-gray-600 text-sm mb-1">
//               <strong>Company:</strong> {selectedProduct.company}
//             </p>
//             <p className="text-gray-600 text-sm mb-2">
//               <strong>Price:</strong> {selectedProduct.price}
//             </p>
//             <p className="text-gray-500 text-sm mb-4">
//               {selectedProduct.description}
//             </p>

//             <div className="flex justify-center gap-3">
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="px-4 py-1.5 text-sm rounded-full bg-gray-200 hover:bg-gray-300"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={handleBuyNow}
//                 className="px-4 py-1.5 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-500"
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";

const products = [
  {
    id: 1,
    name: "GABACRON-NT 100",
    category: "Tablets",
    composition: "Gabapentin 100mg + Nortriptyline 10mg",
    packing: "Strip of 10",
  },
  {
    id: 2,
    name: "GABACRON-M 100",
    category: "Tablets",
    composition: "Gabapentin 100mg + Methylcobalamin 500Mcg",
    packing: "Strip of 10",
  },
  {
    id: 3,
    name: "HEPATOCARE",
    category: "Syrups",
    composition: "Ayurvedic Liver tonic",
    packing: "225ml",
  },
  {
    id: 4,
    name: "HUNGICARE",
    category: "Syrups",
    composition: "Cyproheptadine HCL 2mg Ticholine Citrate 275mg",
    packing: "200ml",
  },
  {
    id: 5,
    name: "4COF-AD",
    category: "Syrups",
    composition:
      "Dextromethorphan Hydrobromide 10mg, Ambroxol Hydrochloride 15mg, Chlorpheniramine Maleate 2mg, Phenylephrine Hydrochloride 5mg & Menthol 1.5mg",
    packing: "100ml",
  },
  {
    id: 6,
    name: "4COF-BR",
    category: "Syrups",
    composition:
      "Terbutaline 1.25mg + Bromhexine 2mg + Guaiphenesin 50mg + Menthol 0.5mg",
    packing: "100ml",
  },
  {
    id: 7,
    name: "THISEN-HB",
    category: "Tablets",
    composition:
      "Liposomal Ferric Pyrophosphate (elemental iron) 30mg. Vitamin C50mg. Vitamin B120.75 mcg. Folic Acid 200 mcg",
    packing: "Strip of 10",
  },
  {
    id: 8,
    name: "EAZAM-XT",
    category: "Tablets",
    composition:
      "Calcium Carbonate 1250mg, Vit.D3 20001.U+ Methylcobalamin 1500mcg, L-Methylfolate 1mg + Pyridoxal 20mg",
    packing: "Strip of 15",
  },
  {
    id: 9,
    name: "EMETICA-OD",
    category: "Tablets",
    composition:
      "Doxylamine 20mg + Vitamin B6 (Pyridoxine) 20mg + Folic Acid 5mg",
    packing: "Strip of 10",
  },
  {
    id: 10,
    name: "DOXCISE-LB",
    category: "Capsules",
    composition: "Doxycycline 100mg + Lactic Acid Bacillus 5 Billion Spores",
    packing: "Strip of 10",
  },
  {
    id: 11,
    name: "DOTACRON-M",
    category: "Tablets",
    composition: "Drotaverine HCI 80mg+ Mefenamic Acid 250mg",
    packing: "Strip of 10",
  },
  {
    id: 12,
    name: "CRONCLAV-625",
    category: "Tablets",
    composition:
      "Amoxycillin Trihydrate 500mg+Potassium Clavulanic Acid 125mg +Lactic Acid Bacillus 60 billion spores",
    packing: "Strip of 10",
  },
  {
    id: 13,
    name: "KETOFER-SP",
    category: "Tablets",
    composition: "Aceclofenac 100mg+ Paracetamol 325mg Serratiopeptidase 15mg",
    packing: "Strip of 10",
  },
  {
    id: 14,
    name: "KETOFER-DT",
    category: "Tablets",
    composition: "Ketorolac Tromethamine Dispersible Tablets 10mg",
    packing: "Strip of 10",
  },
  {
    id: 15,
    name: "PINORAB-DSR",
    category: "Capsules",
    composition: "Rabeprazole 20mg. + Domperiodone 30mg (SR)",
    packing: "Strip of 10",
  },
];

export default function ProductTable() {
  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Our Products</h1>
        <p className="text-gray-500 mt-2">
          A complete list of our healthcare products
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">S. No.</th>
              <th className="px-4 py-2 border-b">Product Name</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Composition</th>
              <th className="px-4 py-2 border-b">Packing</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.composition}</td>
                <td className="px-4 py-2">{product.packing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
