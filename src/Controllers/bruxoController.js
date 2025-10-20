//importar o model
import * as BruxoModel from "../Models/bruxomodel.js";

//exportar o controller
export const listarTodos = async (req, res) => {
    try {
        const bruxos = await BruxoModel.findAll();

        if (!bruxos || bruxos.length === 0) {
            return res.status(404).json({
                total:bruxos.length,
                message: 'Não há bruxos na lista',
                bruxos
            })
        }

        res.status(200).json({
            total: bruxos.length,
            message:'Lista de bruxos',
            bruxos
        })

    } catch (error) {
        res.status(500).json({
        erro:'Erro interno de servidor',
        detalhes:error.message,
        status:500
    })
    };
}