
# remove all objects
rm(list=ls())

# set directory of figures and tables
fig.dir <- "./template-01/figures/"

# set plot margins
set_plt_mar <- function() {
  par(mar = c(5.1, 4.1, 1, 2.1))
  # bottom, left, top, right
  # 5.1, 4.1, 4.1, 2.1
}

# set seed 
set.seed(12345)

# inputs (variable)
inp.01.vec <- c(1, 2, 3, 4, 5)
inp.02.vec <- c(1, 2, 3, 4, 5)

# simulation/illustration ----

for (ii in 1:length(inp.01.vec)) {
  
  for (jj in 1:length(inp.02.vec)) {
    
    inp.01 <- inp.01.vec[ii]
    inp.02 <- inp.02.vec[jj]
    
    # plot no 01 ----
    plt.nam <- paste(fig.dir, "figure_01_", ii, "_", jj, ".svg", sep = "")
    svg(plt.nam) 
    
      set_plt_mar()
      
      plot(x = 0:1, # Create empty plot
           y = 0:1,
           ann = FALSE,
           bty = "n",
           type = "n",
           xaxt = "n",
           yaxt = "n")
      text(x = 0.5,
           y = 0.5,
           paste0("Plot 1 \n \n Parameter 1 / Index ", inp.01, "\n Parameter 2 / Index ", inp.02, "\n \n ./figures/", "figure_01_", ii, "_", jj, ".svg"),
           cex = 2)
    
    dev.off()
    
    # plot no 02 ----
    plt.nam <- paste(fig.dir, "figure_02_", ii, "_", jj, ".svg", sep = "")
    svg(plt.nam) 
    
    set_plt_mar()
    
      plot(x = 0:1, # Create empty plot
           y = 0:1,
           ann = FALSE,
           bty = "n",
           type = "n",
           xaxt = "n",
           yaxt = "n")
      text(x = 0.5,
           y = 0.5,
           paste0("Plot 2 \n \n Parameter 1 / Index ", inp.01, "\n Parameter 2 / Index ", inp.02, "\n \n ./figures/", "figure_02_", ii, "_", jj, ".svg"),
           cex = 2)
    
    dev.off()
    
    # plot no 03 ----
    plt.nam <- paste(fig.dir, "figure_03_", ii, "_", jj, ".svg", sep = "")
    svg(plt.nam) 
    
      set_plt_mar()
      
      plot(x = 0:1, # Create empty plot
           y = 0:1,
           ann = FALSE,
           bty = "n",
           type = "n",
           xaxt = "n",
           yaxt = "n")
      text(x = 0.5,
           y = 0.5,
           paste0("Plot 3 \n \n Parameter 1 / Index ", inp.01, "\n Parameter 2 / Index ", inp.02, "\n \n ./figures/", "figure_03_", ii, "_", jj, ".svg"),
           cex = 2)
    
    dev.off()
    
  }
  
}
