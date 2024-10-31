import { Point } from "../interfaces/point"
import React from "react";
import "../css/Grid.css"; 


export default function Grid() {
    
    let grid: Point[][] = createGrid(8)
    console.log(grid)

    return(
        <div className="pai-sho-grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {row.map((point, colIndex) => (
                        <div key={colIndex} className="grid-cell">
                            <div className="cross"></div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )

}


let createGrid = function (l: number): Point[][] {

    return Array.from({length: 2*l+1}, (e,i) => {
        return Array.from({length:2*l+1}, (m, j) => {
            return {
                x:i-l,
                y:j-l
            }
        })
    })

}
