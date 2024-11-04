import Itinerary from "../../../models/Itinerary.js";

const deleteItinerary = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItinerary = await Itinerary.findByIdAndDelete(id).populate('cityId');
    if (!deletedItinerary) {
      return res.status(404).json({ message: "Itinerario no encontrado" });
    }
    res.status(200).json({ 
      message: "Itinerario eliminado exitosamente",
      deletedItinerary
    });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el itinerario", error });
  }
};

export { deleteItinerary };
