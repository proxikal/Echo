function System() {
    this.getUnicodePackage = function(pkg) {
        if(pkg == "opt1") { return ["░", "█"]; }
        if(pkg == "opt2") { return ["▁", "█"]; }
        if(pkg == "opt3") { return ["⣀", "⣿"]; }
        if(pkg == "opt4") { return ["○", "⬤"]; }
        if(pkg == "opt5") { return ["□", "■"]; }
        if(pkg == "opt6") { return ["⬜", "⬛"]; }
        if(pkg == "opt7") { return ["▱", "▰"]; }
        if(pkg == "opt8") { return ["▭", "◼"]; }
        if(pkg == "opt9") { return ["▯", "▮"]; }
        if(pkg == "opt10") { return ["◯", "⬤"]; }
        if(pkg == "opt11") { return ["⚪", "⚫"]; }
    };

    this.progressBar = function(exp, maxExp, barSize, pkg) {
        var progress = "";

        for(i = 0; i < barSize; i++) {
            progress = progress + "░";
        }

        var char = this.getUnicodePackage(pkg);
        progress = Replace(progress, "░", char[0]);

        var percent = exp / maxExp * 100;
        var prog = percent * progress.length;
        var track = 0;
    
        for(p = 0; p < progress.length; p++) {
            if(percent >= p / progress.length * 100) {
                progress = TrimSuffix(progress, char[0]);
                progress = char[1] + progress;
            }
        }
        if(exp > maxExp) {
            for(i = 0; i < barSize; i++) {
                progress = progress + "░";
            }
            progress = Replace(progress, "░", char[0]);
        }
        return progress;
    };
}
