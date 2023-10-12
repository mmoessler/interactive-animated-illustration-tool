
# remove all objects
rm(list=ls())

# set directory of figures and tables
fig.dir <- "./example-01/figures/"

# set plot margins
set_plt_mar <- function() {
  par(mar = c(5.1, 4.1, 1, 2.1))
  # bottom, left, top, right
  # 5.1, 4.1, 4.1, 2.1
}




# set seed 
set.seed(12345)

# function to simulate sample average ----
Y_bar_ber_sim_fun <- function(RR, NN, p){
  
  # theoretical moments
  mu <- p # mean
  s2 <- p*(1-p) # variance
  
  Y.bar   <- numeric(RR)
  Y.bar.z <- numeric(RR)
  
  for (ii in 1:RR) {
    Y.sim <- rbinom(n=NN, size=1, prob=p)
    Y.bar[ii]   <- mean(Y.sim)
    Y.bar.z[ii] <- (mean(Y.sim)-mu)/sqrt(s2/NN)
  }
  
  return(list(Y.bar = Y.bar, Y.bar.z = Y.bar.z, Y.sim = Y.sim))
  
}

# inputs (variable)
mu.vec <- c(-3, -1.5, 0, 1.5, 3)
sig.vec <- c(0.1, 0.5, 1, 1.5, 2)

# simulation/illustration ----

for (ii in 1:length(mu.vec)) {
  
  for (jj in 1:length(sig.vec)) {
    
    mu <- mu.vec[ii]
    sig <- sig.vec[jj]
    
    # plot no 01: pdf ----
    plt.nam <- paste(fig.dir, "figure_01_", ii, "_", jj, ".svg", sep = "")
    svg(plt.nam) 
    
    set_plt_mar()
    
    main <- c("")
    sub <- c("")
    xlab <- c("")
    ylab <- c("Probability Density")
    
    xlim <- c(-6, 6)
    ylim <- c(0, 5)
    
    plot.new()
    plot.window(xlim, ylim, "")
    title(main = main, sub = sub, xlab = xlab, ylab = ylab)
    axis(1)
    axis(2)
    
    grid()
    
    # add standard normal density curve
    curve(dnorm(x, mean = mu, sd = sig), -6, 6,
          lty = 2,
          lwd = 2, 
          xlab = "", 
          ylab = "",
          add = TRUE,
          col = "darkgreen")
    
    dev.off()
    
    # plot no 02: cdf ----
    plt.nam <- paste(fig.dir, "figure_02_", ii, "_", jj, ".svg", sep = "")
    svg(plt.nam) 
    
    set_plt_mar()
    
    main <- c("")
    sub <- c("")
    xlab <- c("")
    ylab <- c("Cumulated Probability Density")
    
    xlim <- c(-6, 6)
    ylim <- c(0, 1)
    
    plot.new()
    plot.window(xlim, ylim, "")
    title(main = main, sub = sub, xlab = xlab, ylab = ylab)
    axis(1)
    axis(2)
    
    grid()
    
    # add standard normal density curve
    curve(pnorm(x, mean = mu, sd = sig), -6, 6,
          lty = 2,
          lwd = 2, 
          xlab = "", 
          ylab = "",
          add = TRUE,
          col = "darkgreen")
    
    dev.off()
    
  }
  
}
