const superbowlWin = (record) => {
    for (const superbowlWin of record){
        if (superbowlWin.result === "W"){
            return superbowlWin.year;
        }
    }
}
